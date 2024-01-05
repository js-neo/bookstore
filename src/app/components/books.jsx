import React from "react";
import { useParams } from "react-router-dom";
import Book from "./book";
import BooksList from "./booksList";

const Books = () => {
    const { bookId } = useParams();

    return <>{bookId ? <Book bookId={bookId} /> : <BooksList />}</>;
};

export default Books;
