import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ value, onChange }) => {
    return (
        <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 text-white d-flex align-items-center"
            role="search"
        >
            <label className="form-label me-2" htmlFor="search">
                <i className="bi bi-search fs-5"></i>
            </label>
            <input
                type="search"
                name="search"
                id="search"
                value={value}
                className="form-control form-control-dark custom-input"
                placeholder="Search..."
                aria-label="Search"
                style={{
                    color: "#fff",
                    "::placeholder": {
                        color: "#fff",
                        opacity: 0.7
                    }
                }}
                onChange={onChange}
            />
        </form>
    );
};

SearchField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default SearchField;
