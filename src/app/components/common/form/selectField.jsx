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
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => {
                  return {
                      name: options[optionName].name,
                      _id: options[optionName]._id
                  };
              })
            : options;
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
                    optionsArray.map((genre) => (
                        <option key={genre._id} value={genre._id}>
                            {genre.name}
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
