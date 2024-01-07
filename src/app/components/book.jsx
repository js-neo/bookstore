import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import _ from "lodash";
import ProgressBar from "./progress-bar";
import CardContents from "./cardContents";

const Book = ({ bookId }) => {
    const [book, setBook] = useState({});
    const [isMounted, setIsMounted] = useState(true);
    useEffect(() => {
        bookId &&
            api.books
                .getBookById(bookId)
                .then((data) => isMounted && setBook(data));
        return () => setIsMounted(false);
    }, [bookId, isMounted]);

    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    console.log("book-list:", Object.keys(book));

    return (
        <>
            {!_.isEmpty(book) ? (
                <>
                    {!imageLoaded && <ProgressBar />}
                    <div className="custom-container d-flex justify-content-center">
                        <div
                            className={`text-light d-flex justify-content-center m-4 ${
                                imageLoaded ? "border" : ""
                            }`}
                        >
                            <img
                                className="img-fluid m-3"
                                style={{
                                    maxHeight: "calc(100vh - 140px)",
                                    width: "auto",
                                    display: imageLoaded ? "block" : "none"
                                }}
                                src={book.img}
                                alt="Book Cover"
                                onLoad={handleImageLoad}
                            />
                            {imageLoaded && <CardContents {...{ book }} />}
                        </div>
                    </div>
                </>
            ) : (
                <ProgressBar />
            )}
        </>
    );
};

Book.propTypes = {
    bookId: PropTypes.string
};

export default Book;
