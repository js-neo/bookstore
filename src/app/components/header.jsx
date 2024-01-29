import React from "react";
import Navbar from "./navbar";
import PropTypes from "prop-types";
import AuthNav from "./authNav";

const Header = (props) => {
    return (
        <div className="custom-container d-flex justify-content-center">
            <header className="py-3 text-bg-dark col-11 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-lg-start">
                        <Navbar {...props} />

                        <form
                            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 text-white"
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
                            />
                        </form>

                        <AuthNav />
                    </div>
                </div>
            </header>
        </div>
    );
};

Header.propTypes = {
    props: PropTypes.object
};

export default Header;
