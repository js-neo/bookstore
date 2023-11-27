import React from "react";
import PropTypes from "prop-types";

const Badge = ({ color, name }) => {
    return (
        <span className={`badge bg-${color} border border-light`}>{name}</span>
    );
};

Badge.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string
};

export default Badge;
