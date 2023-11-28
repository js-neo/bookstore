import React, { useState } from "react";
import Books from "./components/books";
import api from "./api";
import TotalStatus from "./components/totalStatus";

const App = () => {
    const [books, setBooks] = useState(api.books.fetchAllBooks()),
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
        };
    return (
        <div className="vh-100 bg-dark">
            <TotalStatus
                length={books.length}
                favorites={books.filter((book) => book.status === true).length}
            />
            <Books
                books={books}
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
            />
        </div>
    );
};

export default App;
