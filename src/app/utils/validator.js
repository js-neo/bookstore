export const validator = (data, config) => {
    let errors = {};

    const validationMethods = {
        isRequired: (data, message) =>
            data.trim() === "" ? message : undefined,
        isEmail: (data, message) => {
            const emailRegExp = /^\S+@\S+\.\S+$/g;
            return !emailRegExp.test(data) ? message : undefined;
        }
    };
    const validate = (verifyMethod, data, message) => {
        return validationMethods[verifyMethod]?.(data, message);
    };

    for (const fieldName of Object.keys(data)) {
        for (const [verifyMethod, { message }] of Object.entries(
            config[fieldName]
        )) {
            if (!errors[fieldName]) {
                const error = validate(verifyMethod, data[fieldName], message);
                if (error) {
                    errors = { ...errors, [fieldName]: error };
                }
            }
        }
    }

    return errors;
};
