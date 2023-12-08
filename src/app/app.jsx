import React, { useState } from "react";
import Books from "./components/books";
import api from "./api";

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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-11">
                    <Books
                        books={books}
                        onDelete={handleDelete}
                        onToggleBookmark={handleToggleBookmark}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
