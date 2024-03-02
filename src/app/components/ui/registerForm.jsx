import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import api from "../../api";
import _ from "lodash";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const RegisterForm = ({ users, onUpdateUsers }) => {
    const history = useHistory();
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
            isUnique: {
                message: "A user with the same name already exists"
            }
        },
        email: {
            isRequired: {
                message: "Field email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            },
            isUnique: {
                message: "A user with this email already exists"
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

    const handleChange = ({ target }) =>
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value.trim() };
        });

    const validate = () => {
        const errors = validator(data, validatorConfig, users);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    const createUrlAvatar = () => {
        return `https://api.dicebear.com/7.x/avataaars/svg?seed=${(
            Math.random() + 1
        )
            .toString(36)
            .substring(7)}`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) return;
        const modifiedUser = (({
            confirmPassword,
            role = "user",
            ...rest
        }) => ({ ...rest, avatar: createUrlAvatar(), role }))(data);
        console.log("SUBMIT");
        try {
            const newUsers = await api.users.createNewUser(modifiedUser);
            onUpdateUsers(newUsers);
            localStorage.setItem("users", JSON.stringify(newUsers));
            history.replace("/login");
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

RegisterForm.propTypes = {
    users: PropTypes.array,
    onUpdateUsers: PropTypes.func
};

export default RegisterForm;
