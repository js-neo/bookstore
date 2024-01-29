export const validator = (data, config) => {
    let errors = {};
    const validate = (validateMethod, data, config) => {
        switch (validateMethod) {
            case "isRequired":
                if (data.trim() === "") {
                    return config.message;
                }
                break;
            default:
                break;
        }
    };

    for (const fieldName of Object.keys(data)) {
        for (const [validateMethod, message] of Object.entries(
            config[fieldName]
        )) {
            const error = validate(validateMethod, data[fieldName], message);
            if (error) {
                errors = { ...errors, [fieldName]: error };
            }
        }
    }

    return errors;
};
