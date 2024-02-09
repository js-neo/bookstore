import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const Table = ({
    onSort,
    selectedSort,
    columns,
    books: data,
    startRowIndex,
    children
}) => {
    return (
        <table className="table table-dark table-striped table-hover mt-4">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ data, columns, startRowIndex }} />
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    books: PropTypes.array,
    startRowIndex: PropTypes.number,
    children: PropTypes.array
};
export default Table;
