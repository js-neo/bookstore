import React from "react";
import { useParams } from "react-router-dom";
import BookPage from "../components/page/bookPage";
import BooksListPage from "../components/page/booksListPage";

const Books = () => {
    const { bookId } = useParams();

    return <>{bookId ? <BookPage bookId={bookId} /> : <BooksListPage />}</>;
};

export default Books;
