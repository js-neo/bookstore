import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const BooksTable = ({ books, selectedSort, onDelete, onSort, ...rest }) => {
    return (
        <table className="table table-dark table-striped table-hover mt-4">
            <TableHeader {...{ onSort, selectedSort }} />
            <TableBody data={books} />
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
