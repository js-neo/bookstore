import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    value,
    name,
    defaultOption,
    options,
    error,
    onChange
}) => {
    const optionsArray = Object.values(options).map(({ _id, name }) => ({
        _id,
        name
    }));
    return (
        <div className="mt-2">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className={`form-select custom-select ${
                    error ? "is-invalid" : ""
                }`}
                id={name}
                value={value}
                name={name}
                onChange={onChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map(({ _id, name }) => (
                        <option key={_id} value={_id}>
                            {name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default SelectField;
