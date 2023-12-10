import React from "react";
import Book from "./book";
import PropTypes from "prop-types";
import TriangleButtons from "./triangleButtons";

const BooksTable = ({ books, onDelete, onSort, ...rest }) => {
    return (
        <table className="table table-dark table-striped table-hover mt-4">
            <thead>
                <tr className="border border-light border-2">
                    <th scope="col" className="text-center">
                        #
                    </th>
                    <th scope="col" className="text-center">
                        <span>Title </span>
                        <TriangleButtons onSort={onSort} sortedKey="title" />
                    </th>
                    <th scope="col" className="text-center">
                        <span>Genre </span>
                        <TriangleButtons onSort={onSort} sortedKey="genre" />
                    </th>
                    <th scope="col" className="text-center">
                        <span>Author </span>
                        <TriangleButtons onSort={onSort} sortedKey="author" />
                    </th>
                    <th scope="col" className="text-center">
                        <span>Publication year </span>
                        <TriangleButtons
                            onSort={onSort}
                            sortedKey="publicationYear"
                        />
                    </th>
                    <th scope="col" className="text-center">
                        <span>Rating </span>
                        <TriangleButtons onSort={onSort} sortedKey="rating" />
                    </th>
                    <th scope="col" className="text-center">
                        <span>Price </span>
                        <TriangleButtons onSort={onSort} sortedKey="price" />
                    </th>
                    <th scope="col" className="text-center">
                        <span>Favorites </span>
                        <TriangleButtons onSort={onSort} sortedKey="status" />
                    </th>
                    <th scope="col" className="text-center"></th>
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
