import React, { useState } from "react";
import AddBookForm from "../components/ui/addBookForm";
import { useApp } from "../contexts/appContext";
import { Link } from "react-router-dom";
import UserManagement from "../components/ui/userManagement";

const AdminDashboard = () => {
    const { currentUser } = useApp();
    const [selectedItem, setSelectedItem] = useState("add-book");

    const handleItemClick = (item) => setSelectedItem(item);

    console.log("CurrentUser: ", currentUser);
    return currentUser ? (
        <div className="custom-container d-flex justify-content-center">
            <div className="row col-11 d-flex">
                <div className="col-3">
                    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className={`nav-link ${
                                        selectedItem === "add-book"
                                            ? "active"
                                            : ""
                                    }`}
                                    aria-current="page"
                                    role="button"
                                    onClick={() => handleItemClick("add-book")}
                                >
                                    <i className="bi bi-book-fill"></i>
                                    <span className="ms-2">Add book</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`nav-link ${
                                        selectedItem === "user-management"
                                            ? "active"
                                            : ""
                                    }`}
                                    role="button"
                                    onClick={() =>
                                        handleItemClick("user-management")
                                    }
                                >
                                    <i className="bi bi-book-half"></i>
                                    <span className="ms-2">
                                        User management
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="col-9 text-white d-flex justify-content-center mt-4">
                    {selectedItem === "add-book" ? (
                        <div className="col-md-10 offset-md-1 shadow p-4 text-white my-4">
                            <AddBookForm />
                        </div>
                    ) : selectedItem === "user-management" ? (
                        <div className="mw-100">
                            <h3 className="text-center">
                                Управление пользователями
                            </h3>
                            <UserManagement />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
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

export default AdminDashboard;
