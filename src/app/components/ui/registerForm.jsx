import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import _ from "lodash";
import api from "../../api";
import SelectField from "../common/form/selectField";

const RegisterForm = () => {
    const [data, setData] = useState({ email: "", password: "", genre: "" });
    const [errors, setErrors] = useState({});
    const [genres, setGenres] = useState({});

    const validatorConfig = {
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
        }
    };
    const handleChange = ({ target }) =>
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value };
        });

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length !== 0;
    };

    useEffect(() => {
        validate();
    }, [data]);

    useEffect(() => {
        api.genres.fetchAllGenres().then((data) => setGenres(data));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (isValid) return;
        console.log("data: ", data);
    };
    return (
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
            <SelectField
                label="Genre"
                name="genre"
                value={data.genre}
                options={genres}
                defaultOption="Choose..."
                onChange={handleChange}
            />
            <div className="mt-2">
                <label htmlFor="validationCustom04" className="form-label">
                    Genre
                </label>
                <select
                    className="form-select custom-select"
                    id="validationCustom04"
                    value={data.genre}
                    name="genre"
                    onChange={handleChange}
                >
                    <option disabled value="">
                        Choose...
                    </option>
                    {!_.isEmpty(genres) &&
                        Object.keys(genres).map((genreName) => (
                            <option
                                key={genres[genreName]._id}
                                value={genres[genreName]._id}
                            >
                                {genres[genreName].name}
                            </option>
                        ))}
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <button
                className={`btn w-50 mt-4 mx-auto d-flex justify-content-center btn-${
                    !_.isEmpty(errors) ? "secondary disabled" : "primary"
                }`}
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
