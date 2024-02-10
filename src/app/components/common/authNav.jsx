import React from "react";
import { Link, useLocation } from "react-router-dom";

const AuthNav = () => {
    const authNavLabel = [
        {
            _id: "1s2p7i9o5c2j1h4v9z6t5d6x",
            label: "Login",
            path: "/login"
        },
        {
            _id: "4j6i3h5o9a1c5w4z0k8m2b7p",
            label: "Sign up",
            path: "/sign-up"
        }
    ];
    const { pathname } = useLocation();
    const isActive = (path) => (pathname === path ? "light" : "primary");
    return (
        <div className="text-end d-flex">
            {authNavLabel.map((item) => (
                <div key={item._id} className="button-container">
                    <Link
                        to={item.path}
                        type="button"
                        className={`btn me-2 custom-button btn-outline-${isActive(
                            item.path
                        )}`}
                    >
                        {item.label}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AuthNav;
