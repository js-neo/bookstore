import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../contexts/userContext";

const AuthNav = () => {
    const { currentUser } = useUser();
    const { pathname } = useLocation();
    const isActive = (path) => (pathname === path ? "light" : "primary");
    return (
        <div className="text-end d-flex">
            {currentUser ? (
                <div className="button-container">
                    {currentUser.role === "user" && (
                        <Link
                            to="/user-cabinet"
                            type="button"
                            className={`btn me-2 custom-button btn-outline-${isActive(
                                "/user-cabinet"
                            )}`}
                        >
                            Личный кабинет пользователя
                        </Link>
                    )}
                    {currentUser.role === "admin" && (
                        <Link
                            to="/admin-cabinet"
                            type="button"
                            className={`btn me-2 custom-button btn-outline-${isActive(
                                "/admin-cabinet"
                            )}`}
                        >
                            Панель администратора
                        </Link>
                    )}
                </div>
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
