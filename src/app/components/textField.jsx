import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    return (
        <div className="mt-2">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <input
                className="form-control form-control-dark custom-input"
                type={type}
                id={name}
                name={name}
                placeholder={`enter ${name}`}
                aria-label={label}
                style={{
                    color: "#fff",
                    "::placeholder": {
                        color: "#fff",
                        opacity: 0.7
                    }
                }}
                value={value}
                onChange={onChange}
            />
            {error && <p className="text-danger mt-2">{error}</p>}
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
