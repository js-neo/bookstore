import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookPage from "../components/page/bookPage";
import BooksListPage from "../components/page/booksListPage";
import api from "../api";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        Promise.all([
            api.books.fetchAllBooks(),
            api.genres.fetchAllGenres(),
            api.authors.fetchAllAuthors()
        ]).then(([booksData, genresData, authorsData]) => {
            setBooks(booksData);
            setGenres(genresData);
            setAuthors(authorsData);
        });
    }, []);
    const { bookId } = useParams();

    const handleDelete = (status, bookId) => {
        if (status) return;
        setBooks(books.filter((book) => book._id !== bookId));
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

    return (
        <>
            {bookId ? (
                <BookPage bookId={bookId} {...{ books, genres, authors }} />
            ) : (
                <BooksListPage
                    {...{ books, genres, authors }}
                    onToggleBookmark={handleToggleBookmark}
                    onDelete={handleDelete}
                />
            )}
        </>
    );
};

export default Books;
