import React from "react";
import PropTypes from "prop-types";
import { columns } from "../constants/columns";
import _ from "lodash";
import Badge from "./badge";

const TableBody = ({ data }) => {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((key) => {
                        return key === "genres" ? (
                            <td key={columns[key]._id}>
                                <Badge
                                    {..._.get(
                                        item,
                                        columns[key].path.split(".")[0]
                                    )}
                                />
                            </td>
                        ) : (
                            <td key={columns[key]._id}>
                                {_.get(item, columns[key].path)}
                            </td>
                        );
                    })}
                </tr>
            ))}
        </tbody>
    );
};

TableBody.propTypes = {
    data: PropTypes.array
};

export default TableBody;
