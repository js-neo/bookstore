import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="mt-2">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    className={`form-control custom-input ${
                        error ? "is-invalid" : ""
                    }`}
                    type={showPassword ? "text" : type}
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
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i
                            className={`bi bi-eye${
                                showPassword ? "-slash" : ""
                            }`}
                        ></i>
                    </button>
                )}
                {error && <div className="invalid-feedback mt-2">{error}</div>}
            </div>
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
