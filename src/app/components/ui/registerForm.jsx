import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import api from "../../api";
import _ from "lodash";

const RegisterForm = () => {
    const [users, setUsers] = useState([]);
    console.log("UP_users: ", users);
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});

    const validatorConfig = {
        username: {
            isRequired: {
                message: "Field email is required"
            },
            isMinLength: {
                getMessage: (value) =>
                    `The username must contain at least ${value} characters`,
                value: 4
            },
            isUnique: {}
        },
        email: {
            isRequired: {
                message: "Field email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            }
        },
        password: {
            isRequired: {
                message: "Field password is required"
            },
            isCapitalLetter: {
                message: "The password must contain at least one capital letter"
            },
            isContainDigit: {
                message: "The password must contain at least one decimal number"
            },
            isMinLength: {
                getMessage: (value) =>
                    `The password must contain at least ${value} characters`,
                value: 8
            }
        },
        confirmPassword: {
            isEqual: {
                message: "Passwords must match"
            }
        }
    };

    useEffect(() => {
        console.log("Render new data");
        api.users.fetchAllUsers().then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        console.log("users-RexForm: ", users);
    });

    const handleChange = ({ target }) =>
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value.trim() };
        });

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) return;
        const modifiedUser = (({
            confirmPassword,
            role = "user",
            ...rest
        }) => ({ ...rest, role }))(data);
        console.log("SUBMIT");
        try {
            const newUsers = await api.users.createNewUser(modifiedUser);
            setUsers(newUsers);
        } catch (error) {
            console.error("Error creating new user: ", error);
        }
    };
    return (
        <>
            <p>{users.length}</p>
            <form onSubmit={handleSubmit} className="form-control-dark">
                <TextField
                    label="UserName"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    error={errors.username}
                />
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
                <TextField
                    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
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

export default RegisterForm;
