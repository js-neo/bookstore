import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table";

const BooksTable = ({
    books,
    columns,
    selectedSort,
    currentPage,
    pageSize,
    onSort
}) => {
    const startRowIndex = currentPage * pageSize - pageSize;
    return (
        <Table {...{ onSort, selectedSort, columns, books, startRowIndex }} />
    );
};
BooksTable.propTypes = {
    books: PropTypes.array,
    selectedSort: PropTypes.object,
    genres: PropTypes.array,
    authors: PropTypes.array,
    columns: PropTypes.object,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    onBuy: PropTypes.func,
    onRent: PropTypes.func,
    onSort: PropTypes.func,
    onToggleBookmark: PropTypes.func
};

export default BooksTable;
