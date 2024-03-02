import React, { useState } from "react";
import PurchasedBooksList from "../components/ui/purchasedBooksList";
import RentedBooksList from "../components/ui/rentedBooksList";
import { useApp } from "../contexts/appContext";

const UserDashboard = () => {
    const { currentUser } = useApp();
    const [selectedItem, setSelectedItem] = useState("purchased-books");
    const handleItemClick = (item) => setSelectedItem(item);

    return (
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
                                    <span className="ms-2">Rented books</span>
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <div className="dropdown">
                            <a
                                href="#"
                                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                id="dropdownUser1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://github.com/mdo.png"
                                    alt=""
                                    width="32"
                                    height="32"
                                    className="rounded-circle me-2"
                                />
                                <strong>{currentUser.username}</strong>
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-dark text-small shadow"
                                aria-labelledby="dropdownUser1"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Sign out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-9 text-white d-flex justify-content-center mt-4">
                    {selectedItem === "purchased-books" ? (
                        <PurchasedBooksList />
                    ) : selectedItem === "rented-books" ? (
                        <div className="mw-100">
                            <h3 className="text-center">Арендованные книги</h3>
                            <RentedBooksList />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
