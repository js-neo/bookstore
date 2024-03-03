import React, { useState } from "react";
import PurchasedBooksList from "../components/ui/purchasedBooksList";
import RentedBooksList from "../components/ui/rentedBooksList";
import { useApp } from "../contexts/appContext";
import { Link } from "react-router-dom";

const UserDashboard = () => {
    const { currentUser } = useApp();

    const [selectedItem, setSelectedItem] = useState("purchased-books");

    const handleItemClick = (item) => setSelectedItem(item);

    return currentUser ? (
        <>
            <div className="custom-container d-flex justify-content-center">
                <div className="row col-11 d-flex">
                    <div className="col-3">
                        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav-item">
                                    <a
                                        href="#"
                                        className={`nav-link ${
                                            selectedItem === "purchased-books"
                                                ? "active"
                                                : ""
                                        }`}
                                        aria-current="page"
                                        role="button"
                                        onClick={() =>
                                            handleItemClick("purchased-books")
                                        }
                                    >
                                        <i className="bi bi-book-fill"></i>
                                        <span className="ms-2">
                                            Purchased books
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className={`nav-link ${
                                            selectedItem === "rented-books"
                                                ? "active"
                                                : ""
                                        }`}
                                        role="button"
                                        onClick={() =>
                                            handleItemClick("rented-books")
                                        }
                                    >
                                        <i className="bi bi-book-half"></i>
                                        <span className="ms-2">
                                            Rented books
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <hr />
                        </div>
                    </div>
                    <div className="col-9 text-white">
                        {selectedItem === "purchased-books" ? (
                            <div className="w-100">
                                <h3 className="text-center mt-5">
                                    Купленные книги
                                </h3>
                                <PurchasedBooksList />
                            </div>
                        ) : selectedItem === "rented-books" ? (
                            <div className="w-100">
                                <h3 className="text-center mt-5">
                                    Арендованные книги
                                </h3>
                                <RentedBooksList />
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    ) : (
        <h3 className="text-center text-white mt-5">
            Already have account?
            <Link
                to="/login"
                role="button"
                className="text-primary ms-2 text-decoration-none"
            >
                Sing In
            </Link>
        </h3>
    );
};

export default UserDashboard;
