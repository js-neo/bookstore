import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import _ from "lodash";
import PropTypes from "prop-types";
import { useApp } from "../../contexts/appContext";

const LoginForm = ({ users }) => {
    const { setCurrentUser } = useApp();
    const [message, setMessage] = useState("");
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Field email is required"
            }
        },
        password: {
            isRequired: {
                message: "Field password is required"
            }
        }
    };
    const handleChange = ({ target }) => {
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value };
        });
        setMessage("");
    };

    const validate = () => {
        const errors = validator(data, validatorConfig, users);
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
        const user = users.find(
            ({ email, password }) =>
                email === data.email && password === data.password
        );
        if (user) {
            setCurrentUser(user);
            localStorage.setItem("currentUser", JSON.stringify(user));
            history.replace("/books");
        } else {
            setData({ email: "", password: "" });
            setMessage("Invalid email or password. Please try again.");
        }
    };
    return (
        <>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit} className="form-control-dark">
                <TextField
                    label="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <button
                    className={`btn w-50 mt-4 mx-auto d-flex justify-content-center btn-${
                        !_.isEmpty(errors) ? "secondary disabled" : "primary"
                    }`}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

LoginForm.propTypes = {
    users: PropTypes.array
};
export default LoginForm;
