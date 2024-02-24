export const validator = (data, config, users) => {
    let errors = {};
    const { password } = data;

    const validationMethods = {
        isRequired: (data, { message }) =>
            data.trim() === "" ? message : undefined,
        isEmail: (data, { message }) =>
            !/^\S+@\S+\.\S+$/g.test(data) ? message : undefined,
        isCapitalLetter: (data, { message }) =>
            !/[A-Z]+/g.test(data) ? message : undefined,
        isContainDigit: (data, { message }) =>
            !/\d+/g.test(data) ? message : undefined,
        isOnlyNumbers: (data, { message }) =>
            !/^[0-9]+$/g.test(data) ? message : undefined,
        isMinLength: (data, { getMessage, value }) =>
            data.length < value ? getMessage(value) : undefined,
        isEqual: (data, { message }) =>
            data !== password ? message : undefined,
        isURL: (data, { message }) =>
            !/^(ftp|http|https):\/\/[^ "]+\.[^ "]+$/g.test(data)
                ? message
                : undefined,
        isUnique: (data, { message }, field) => {
            const foundUser = users.find((user) => user[field] === data);
            return foundUser ? message : undefined;
        },
        isExist: (data, { message }, field) => {
            const foundUser = users.find((user) => user[field] === data);
            return !foundUser ? message : undefined;
        }
    };
    const validate = (verifyMethod, data, message, fieldName) => {
        return validationMethods[verifyMethod]?.(data, message, fieldName);
    };

    for (const fieldName of Object.keys(data)) {
        if (fieldName in config) {
            for (const [verifyMethod, params] of Object.entries(
                config[fieldName]
            )) {
                if (!errors[fieldName]) {
                    const error = validate(
                        verifyMethod,
                        data[fieldName],
                        params,
                        fieldName
                    );
                    if (error) {
                        errors = { ...errors, [fieldName]: error };
                    }
                }
            }
        }
    }

    return errors;
};
