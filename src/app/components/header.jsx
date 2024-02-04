import React from "react";
import Navbar from "./navbar";
import PropTypes from "prop-types";
import AuthNav from "./authNav";
import SearchField from "./searchField";

const Header = (props) => {
    return (
        <div className="custom-container d-flex justify-content-center">
            <header className="py-3 text-bg-dark col-11 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-lg-start">
                        <Navbar {...props} />
                        <div className="me-lg-3">
                            <SearchField />
                        </div>
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
