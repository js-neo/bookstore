import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    value,
    name,
    defaultOption,
    options,
    onChange
}) => {
    const optionsArray = Object.values(options).map(({ _id, name }) => ({
        _id,
        name
    }));
    return (
        <div className="mt-2">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className="form-select custom-select"
                id="validationCustom04"
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
            <div className="invalid-feedback">Please select a valid state.</div>
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func
};

export default SelectField;
