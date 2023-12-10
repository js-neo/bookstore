import React from "react";
import Book from "./book";
import PropTypes from "prop-types";

const BooksTable = ({ books, onDelete, onSort, ...rest }) => {
    return (
        <table className="table table-dark table-striped table-hover mt-4">
            <thead>
                <tr className="border border-light border-2">
                    <th scope="col">#</th>
                    <th
                        scope="col"
                        onClick={() => onSort("title")}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Title </span>
                    </th>
                    <th
                        scope="col"
                        onClick={() => onSort("genre.name")}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Genre </span>
                    </th>
                    <th
                        scope="col"
                        onClick={() => onSort("author.name")}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Author </span>
                    </th>
                    <th
                        scope="col"
                        onClick={() => onSort("publicationYear")}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Publication year </span>
                    </th>
                    <th
                        scope="col"
                        onClick={() => onSort("rating")}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Rating </span>
                    </th>
                    <th
                        scope="col"
                        onClick={() => onSort("price")}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Price </span>
                    </th>
                    <th
                        scope="col"
                        onClick={() => onSort("status")}
                        style={{ cursor: "pointer" }}
                    >
                        <span>Favorites </span>
                    </th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, i) => (
                    <Book
                        key={book._id}
                        index={i}
                        onClick={() => onDelete(book.status, book._id)}
                        {...rest}
                        {...book}
                    />
                ))}
            </tbody>
        </table>
    );
};

BooksTable.propTypes = {
    books: PropTypes.array,
    onDelete: PropTypes.func,
    onSort: PropTypes.func
};

export default BooksTable;
