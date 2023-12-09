import React from "react";
import PropTypes from "prop-types";

const TriangleButtons = ({ onSort }) => {
    return (
        <span>
            <span
                className="text-primary bi bi-caret-up-fill"
                style={{ cursor: "pointer" }}
                onClick={() => onSort("up")}
            ></span>
            <span
                className="text-primary bi bi-caret-down-fill"
                style={{ cursor: "pointer" }}
                onClick={() => onSort("down")}
            ></span>
        </span>
    );
};

TriangleButtons.propTypes = {
    onSort: PropTypes.func
};

export default TriangleButtons;
