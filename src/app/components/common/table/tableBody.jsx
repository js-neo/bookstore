import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const TableBody = ({ data, columns, startRowIndex }) => {
    console.log("DATA: ", data, columns);
    const renderContent = (item, key) => {
        return columns[key].component
            ? typeof columns[key].component === "function"
                ? columns[key].component(item)
                : columns[key].component
            : _.get(item, columns[key].path);
    };
    return (
        <tbody>
            {data.map((item, i) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((key) => {
                        return (
                            <td
                                key={columns[key]._id}
                                className={`${
                                    key === "delete" ? "text-end" : ""
                                }`}
                            >
                                {key === "rowNumber"
                                    ? i + startRowIndex + 1
                                    : renderContent(item, key)}
                            </td>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object,
    startRowIndex: PropTypes.number
};

export default TableBody;
