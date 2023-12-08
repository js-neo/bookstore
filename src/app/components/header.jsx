import React from "react";

const Header = () => {
    return (
        <header className="p-3 text-bg-dark border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                    >
                        <svg
                            className="bi me-2"
                            width="40"
                            height="32"
                            role="img"
                            aria-label="Bootstrap"
                        >
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a href="#" className="nav-link px-2 text-light">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link px-2">
                                About
                            </a>
                        </li>
                    </ul>

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
                                "::placeholder": { color: "#fff", opacity: 0.7 }
                            }}
                        />
                    </form>

                    <div className="text-end d-flex">
                        <div className="button-container">
                            <button
                                type="button"
                                className="btn btn-outline-primary me-2 custom-button"
                            >
                                Login
                            </button>
                        </div>
                        <div className="button-container">
                            <button
                                type="button"
                                className="btn btn-outline-primary custom-button"
                            >
                                Sign-up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
