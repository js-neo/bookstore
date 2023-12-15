import React from "react";
import PropTypes from "prop-types";
import { columns } from "../constants/columns";

const HeaderTable = ({ selectedSort, onSort }) => {
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
                            columns[column].iterator
                                ? () => handleSort(columns[column].iterator)
                                : null
                        }
                        {...{ role: columns[column].iterator && "button" }}
                    >
                        <span>{columns[column].name}</span>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

HeaderTable.propTypes = {
    columns: PropTypes.object,
    selectedSort: PropTypes.object,
    onSort: PropTypes.func
};

export default HeaderTable;
