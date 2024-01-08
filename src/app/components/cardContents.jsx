import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const CardContents = ({ book, rowData }) => {
    const renderContent = (item, key) => {
        return rowData[key].component
            ? typeof rowData[key].component === "function"
                ? rowData[key].component(item)
                : rowData[key].component
            : _.get(item, rowData[key].path);
    };
    return (
        <table className="table table-dark table-striped table-hover">
            <tbody>
                {Object.keys(rowData).map((key) => (
                    <tr key={rowData[key]._id} className="align-middle">
                        <th className="font-monospace">
                            {rowData[key].name} :
                        </th>
                        <td>
                            <span className="me-2">
                                {renderContent(book, key)}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

CardContents.propTypes = {
    book: PropTypes.object,
    rowData: PropTypes.object
};

export default CardContents;
