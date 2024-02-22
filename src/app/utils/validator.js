export const validator = (data, config) => {
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
                : undefined
    };
    const validate = (verifyMethod, data, message) => {
        return validationMethods[verifyMethod]?.(data, message);
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
                        params
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
