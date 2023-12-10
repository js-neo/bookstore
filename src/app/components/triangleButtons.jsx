import React from "react";
import PropTypes from "prop-types";

const TriangleButtons = ({ onSort, sortedKey }) => {
    return (
        <span>
            <span
                className="text-primary bi bi-caret-up-fill"
                style={{ cursor: "pointer" }}
                onClick={() => onSort(sortedKey, "up")}
            ></span>
            <span
                className="text-primary bi bi-caret-down-fill"
                style={{ cursor: "pointer" }}
                onClick={() => onSort(sortedKey, "down")}
            ></span>
        </span>
    );
};

TriangleButtons.propTypes = {
    sortedKey: PropTypes.string,
    onSort: PropTypes.func
};

export default TriangleButtons;
