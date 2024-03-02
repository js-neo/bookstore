import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ selectedSort, onSort, columns }) => {
    const handleSort = (sortedKey) => {
        if (selectedSort.path === sortedKey) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: sortedKey, order: "asc" });
        }
    };
    const renderSortArrow = (selectedSort, currentPath) =>
        selectedSort.path === currentPath && (
            <span className="text-primary ms-2">
                <i
                    className={`bi bi-caret-${
                        selectedSort.order === "asc" ? "up" : "down"
                    }-fill`}
                ></i>
            </span>
        );

    return (
        <thead>
            <tr className="border border-light border-2">
                {Object.keys(columns).map((column) => (
                    <th
                        className={`${
                            column === "delete" ? "text-center" : ""
                        }`}
                        key={columns[column]._id}
                        scope="col"
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : null
                        }
                        {...{ role: columns[column].path && "button" }}
                    >
                        <span>{columns[column].name}</span>
                        {renderSortArrow(selectedSort, columns[column].path)}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.object,
    selectedSort: PropTypes.object,
    onSort: PropTypes.func
};

export default TableHeader;
