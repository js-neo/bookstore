import React, { useState } from "react";
import LoginForm from "../components/ui/loginForm";
import { useParams } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm";
import { useApp } from "../contexts/appContext";

const Login = () => {
    const { type } = useParams();
    const { users, setUsers } = useApp();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const handleToggleFormType = () => {
        setFormType((prevState) =>
            prevState === "login" ? "register" : "login"
        );
    };
    const handleUpdateUsers = (newUsers) => {
        console.log("UPDATE");
        setUsers(newUsers);
    };

    return (
        <div
            className="container mt-3"
            style={{ height: "calc(100vh - 100px)" }}
        >
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 text-white">
                    {formType === "register" ? (
                        <>
                            <h3 className="text-center">Register</h3>
                            <RegisterForm
                                users={users}
                                onUpdateUsers={handleUpdateUsers}
                            />
                            <p className="text-center mt-2">
                                Already have account?
                                <a
                                    role="button"
                                    className="text-primary ms-2 text-decoration-none"
                                    onClick={handleToggleFormType}
                                >
                                    Sing In
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="text-center">Login</h3>
                            <LoginForm users={users} />
                            <p className="text-center mt-2">
                                Dont have account?
                                <a
                                    role="button"
                                    className="text-primary ms-2 text-decoration-none"
                                    onClick={handleToggleFormType}
                                >
                                    Sing Up
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
