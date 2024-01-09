import React from "react";
import { useParams } from "react-router-dom";
import Book from "../components/book";
import BooksList from "../components/booksList";

const Books = () => {
    const { bookId } = useParams();

    return <>{bookId ? <Book bookId={bookId} /> : <BooksList />}</>;
};

export default Books;
