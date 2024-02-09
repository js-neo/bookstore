import React, { useState } from "react";
import LoginForm from "../components/ui/loginForm";
import { useParams } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType] = useState(type === "register" ? type : "login");
    return (
        <div
            className="container mt-3"
            style={{ height: "calc(100vh - 100px)" }}
        >
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 text-white">
                    {formType === "login" ? (
                        <>
                            <h3 className="text-center">Enter your data</h3>
                            <LoginForm />
                        </>
                    ) : (
                        <RegisterForm />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
