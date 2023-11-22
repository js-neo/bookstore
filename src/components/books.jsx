import React, { useState } from "react";
import api from "../api";
import Book from "./book";

const Books = () => {
    const [books, setBooks] = useState(api.books.fetchAllBooks());
    const handleDelete = (bookId) => {
        setBooks(books.filter((book) => book._id !== bookId));
    };
    console.log("length:", books.length);
    return (
        <>
            {books.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Author</th>
                            <th scope="col">Publication year</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Price</th>
                            <th scope="col">Favorites</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, i) => (
                            <Book
                                key={book._id}
                                index={i}
                                onClick={() => handleDelete(book._id)}
                                {...book}
                            />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Books;
