import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useApp } from "../../contexts/appContext";

const AuthNav = () => {
    const { currentUser, setCurrentUser } = useApp();
    const { pathname } = useLocation();
    const history = useHistory();
    const handleOut = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
        history.replace("/login");
    };
    const isActive = (path) => (pathname === path ? "light" : "primary");
    return (
        <div className="text-end d-flex">
            {currentUser ? (
                <>
                    <div className="dropdown">
                        <a
                            href="#"
                            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src={currentUser.avatar}
                                alt="Avatar"
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
                                <div>
                                    {currentUser.role === "user" && (
                                        <Link
                                            to="/user-cabinet"
                                            className="dropdown-item text-center text-wrap"
                                            role="button"
                                        >
                                            Личный кабинет пользователя
                                        </Link>
                                    )}
                                    {currentUser.role === "admin" && (
                                        <Link
                                            to="/admin-cabinet"
                                            className="dropdown-item text-center text-wrap"
                                            role="button"
                                        >
                                            Панель администратора
                                        </Link>
                                    )}
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a
                                    className="dropdown-item text-center"
                                    role="button"
                                    onClick={handleOut}
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </>
            ) : (
                <div className="button-container">
                    <Link
                        to="/login"
                        type="button"
                        className={`btn me-2 custom-button btn-outline-${isActive(
                            "/login"
                        )}`}
                    >
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AuthNav;
