import React, { useEffect, useState } from "react";
import api from "../api";
import Book from "./book";
import Pagination from "./pagination";

const Books = () => {
    const allBooks = api.books.fetchAllBooks();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const pagesCount = Math.ceil(allBooks.length / pageSize);
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = currentPage * pageSize;
    const [books, setBooks] = useState(allBooks.slice(0, pageSize));

    useEffect(() => {
        setBooks(allBooks.slice(startIndex, endIndex));
    }, [currentPage]);

    const handleDelete = (status, bookId) => {
        if (status) return;
        setBooks(allBooks.filter((book) => book._id !== bookId));
    };
    const handleToggleBookmark = (bookId) => {
        setBooks(
            books.map((book) => {
                return book._id === bookId
                    ? { ...book, status: !book.status }
                    : book;
            })
        );
    };

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            {allBooks.length > 0 && (
                <table className="table table-dark table-striped table-hover m-0">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Author</th>
                            <th scope="col">Publication year</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Price</th>
                            <th scope="col" className="text-center">
                                Favorites
                            </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, i) => (
                            <Book
                                key={book._id}
                                index={i}
                                onToggleBookmark={handleToggleBookmark}
                                onClick={() =>
                                    handleDelete(book.status, book._id)
                                }
                                {...book}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                onChangePage={handleChangePage}
                pages={pages}
                currentPage={currentPage}
            />
        </>
    );
};

export default Books;
