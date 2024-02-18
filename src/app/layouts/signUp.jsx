import React from "react";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    return (
        <div
            className="container mt-3"
            style={{ height: "calc(100vh - 100px)" }}
        >
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 text-white">
                    <h3 className="text-center">Register</h3>
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
