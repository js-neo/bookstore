import React, { useState } from "react";
import api from "../api";
import Book from "./book";
import Pagination from "./pagination";

const Books = () => {
    const [books, setBooks] = useState(api.books.fetchAllBooks()),
        [currentPage, setCurrentPage] = useState(1),
        PAGE_SIZE = 5,
        pagesCount = Math.ceil(books.length / PAGE_SIZE),
        pages = Array.from({ length: pagesCount }, (_, i) => i + 1),
        startIndex = (currentPage - 1) * PAGE_SIZE,
        endIndex = currentPage * PAGE_SIZE,
        handleDelete = (status, bookId) => {
            if (status) return;
            setBooks(books.filter((book) => book._id !== bookId));
        },
        handleToggleBookmark = (bookId) => {
            setBooks(
                books.map((book) => {
                    return book._id === bookId
                        ? { ...book, status: !book.status }
                        : book;
                })
            );
        },
        handleChangePage = (page) => {
            setCurrentPage(page);
        };

    if (currentPage > pagesCount) {
        setCurrentPage(pagesCount);
    }

    return (
        <>
            {books.length > 0 && (
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
                        {books.slice(startIndex, endIndex).map((book, i) => (
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
            {pagesCount > 1 && (
                <Pagination
                    onChangePage={handleChangePage}
                    pages={pages}
                    currentPage={currentPage}
                />
            )}
        </>
    );
};

export default Books;
