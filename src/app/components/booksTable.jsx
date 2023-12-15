import React from "react";
import Book from "./book";
import PropTypes from "prop-types";
import HeaderTable from "./headerTable";

const BooksTable = ({ books, selectedSort, onDelete, onSort, ...rest }) => {
    return (
        <table className="table table-dark table-striped table-hover mt-4">
            <HeaderTable selectedSort={selectedSort} onSort={onSort} />
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
    selectedSort: PropTypes.object,
    onDelete: PropTypes.func,
    onSort: PropTypes.func
};

export default BooksTable;
