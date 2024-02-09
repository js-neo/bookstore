import React, { useEffect, useState } from "react";
import TextField from "../components/common/form/textField";

const SignUp = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    console.log("errors: ", errors);
    const handleChange = ({ target }) =>
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value };
        });

    const validate = () => {
        const errors = {};
        for (const fieldName in data) {
            if (data[fieldName].trim() === "") {
                errors[fieldName] = `Field ${fieldName} is required`;
            }
        }
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) return;
        console.log("data: ", data);
    };
    return (
        <div
            className="container d-flex justify-content-center align-items-center mt-3"
            style={{ height: "calc(100vh - 100px)" }}
        >
            <div className="row mh-100 justify-content-center col-5">
                <div className="text-white">
                    <div className="d-flex justify-content-center">
                        <h3>Enter your data</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="d-grid mt-3">
                        <TextField
                            label="Email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                        <button className="btn btn-primary w-50 mt-4 mx-auto">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
