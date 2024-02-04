import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ onChange }) => {
    return (
        <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 text-white"
            role="search"
        >
            <input
                type="search"
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
    onChange: PropTypes.func
};

export default SearchField;
