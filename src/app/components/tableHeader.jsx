import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ selectedSort, onSort, columns }) => {
    const handleSort = (sortedKey) => {
        if (selectedSort.iterator === sortedKey) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ iterator: sortedKey, order: "asc" });
        }
    };
    return (
        <thead>
            <tr className="border border-light border-2">
                {Object.keys(columns).map((column) => (
                    <th
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
