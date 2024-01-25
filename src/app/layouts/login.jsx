import React, { useState } from "react";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const handleChange = ({ target }) =>
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value };
        });
    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-5 text-white">
                    <div className="d-flex justify-content-center">
                        <h3>Enter your data</h3>
                    </div>
                    <form action="" className="mt-3">
                        <div className="mt-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="form-control form-control-dark custom-input"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="enter email"
                                aria-label="Email"
                                style={{
                                    color: "#fff",
                                    "::placeholder": {
                                        color: "#fff",
                                        opacity: 0.7
                                    }
                                }}
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-3">
                            <label className="form-label" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="form-control form-control-dark custom-input"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="enter password"
                                aria-label="Password"
                                style={{
                                    color: "#fff",
                                    "::placeholder": {
                                        color: "#fff",
                                        opacity: 0.7
                                    }
                                }}
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
