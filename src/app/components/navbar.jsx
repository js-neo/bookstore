import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ currentLabel, onChangeLabel }) => {
    console.log("currentLabel:", currentLabel);
    const navBarLabel = [
        {
            _id: "9b5d8k3d1e4l2q1g4p1h0j8f",
            label: "Main"
        },
        {
            _id: "1s2p7i9o5c2j1h4v9z6t5d6x",
            label: "Login"
        },
        {
            _id: "0u7y2f2o3n9d0d8b0w0a2d3b",
            label: "Books"
        }
    ];
    return (
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {navBarLabel.map((item) => (
                <li key={item._id}>
                    <a
                        href="#"
                        className={`nav-link px-2 ${
                            currentLabel === item.label && "text-light"
                        }`}
                        onClick={() => onChangeLabel(item.label)}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

Navbar.propTypes = {
    currentLabel: PropTypes.string,
    onChangeLabel: PropTypes.func
};

export default Navbar;
