import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, pages, onChangePage }) => {
    return (
        <nav aria-label="..." className="navbar bg-dark pt-3 fixed-bottom">
            <ul className="pagination">
                {currentPage > 1 && (
                    <li
                        className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                        }`}
                    >
                        <a
                            className={`page-link bg-dark btn ${
                                currentPage !== 1 ? "text-light" : ""
                            }`}
                            onClick={() => onChangePage(currentPage - 1)}
                        >
                            Previous
                        </a>
                    </li>
                )}

                {pages.map((page) => {
                    return (
                        <li
                            key={page}
                            className={`page-item ${
                                currentPage === page ? "active" : ""
                            }`}
                            aria-current={currentPage === page ? "page" : null}
                        >
                            <a
                                className={`page-link text-light btn ${
                                    currentPage !== page ? "bg-dark" : ""
                                }`}
                                onClick={() => onChangePage(page)}
                            >
                                {page}
                            </a>
                        </li>
                    );
                })}
                {currentPage < pages.length && (
                    <li className="page-item">
                        <a
                            className={`page-link bg-dark btn ${
                                currentPage !== pages.length ? "text-light" : ""
                            }`}
                            onClick={() => onChangePage(currentPage + 1)}
                        >
                            Next
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    pages: PropTypes.array,
    onChangePage: PropTypes.func
};

export default Pagination;
