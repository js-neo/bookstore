import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import { useUser } from "../../contexts/userContext";
import _ from "lodash";
import PropTypes from "prop-types";

const LoginForm = ({ users }) => {
    const { currentUser, setCurrentUser } = useUser();
    console.log("currentUser: ", currentUser);
    const [message, setMessage] = useState("");
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});

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
