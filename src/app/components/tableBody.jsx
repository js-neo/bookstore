import React from "react";
import PropTypes from "prop-types";
import { columns } from "../constants/columns";
import _ from "lodash";

const TableBody = ({ data }) => {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column._id}>
                            {_.get(item, columns[column].path)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array
};

export default TableBody;
