import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Badge from "./badge";
import api from "../api";
import _ from "lodash";
import ProgressBar from "./progress-bar";

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

    return (
        <>
            {!_.isEmpty(book) ? (
                <>
                    {!imageLoaded && (
                        <div
                            className="m-4 d-flex justify-content-center align-items-center"
                            style={{ height: "calc(100vh - 120px)" }}
                        >
                            <div className="progress col-7">
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                >
                                    loading...
                                </div>
                            </div>
                        </div>
                    )}
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
                            {imageLoaded && (
                                <div className="m-3">
                                    <h2>
                                        <span className="font-monospace">
                                            Title:{" "}
                                        </span>
                                        {`${book.title}`}
                                    </h2>
                                    <h3>
                                        <span className="font-monospace">
                                            Genre:{" "}
                                        </span>
                                        <Badge {...book.genre} />
                                    </h3>
                                    <h3>
                                        <span className="font-monospace">
                                            Author:{" "}
                                        </span>
                                        {`${book.author.name}`}
                                    </h3>
                                    <h3>
                                        <span className="font-monospace">
                                            Publication year:{" "}
                                        </span>
                                        {`${book.publicationYear}`}
                                    </h3>
                                    <h3>
                                        <span className="font-monospace">
                                            Rating:{" "}
                                        </span>
                                        {`${book.rating}`}
                                    </h3>
                                    <h3>
                                        <span className="font-monospace">
                                            Price:{" "}
                                        </span>
                                        {`${book.price}`}
                                    </h3>
                                </div>
                            )}
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
