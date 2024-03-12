import Validators from "./Validate.js";

const ValidateAll = (data) => {
    let Errors = [];
    for (let key in data) {
        if (Validators[key]) {
            let result = Validators[key](data[key]);
            if (!result.success) {
                Errors.push(result.message);
            }
        } else {
            if (!data[key]) {
                Errors.push(`${key} is required`);
            } else if (isNaN(data[key])) {
                let result = Validators["string"](data[key]);
                if (!result.success) {
                    Errors.push(result.message);
                }
            } else {
                let result = Validators["number"](data[key]);
                if (!result.success) {
                    Errors.push(result.message);
                }
            }
        }
    }
    if (Errors.length > 0) {
        return { success: false, message: Errors };
    }
    return { success: true, message: "All are valid" };
};


export default ValidateAll;