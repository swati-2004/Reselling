export const ValidateName = function (name) {
    if (!name) {
        return { success: false, message: "Name is required" };
    }
    name = name?.toString()?.trim();
    if (name.toString().trim().length < 3) {
        return { success: false, message: "Name should be atleast 3 characters" };
    }
    let pattern = /^[a-zA-Z\s]+$/;
    if (!pattern.test(name)) {
        return { success: false, message: "Name should contain only alphabets" };
    }
    return { success: true, message: "Name is valid" };
}

export const validateEmail = function (email) {
    if (!email) {
        return { success: false, message: "Email is required" };
    }
    email = email?.toString()?.trim();
    let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
        return { success: false, message: "Invalid Email" };
    }
    return { success: true, message: "Email is valid" };
}

export const validateMobile = function (mobile) {
    if (!mobile) {
        return { success: false, message: "Mobile is required" };
    }
    mobile = mobile?.toString()?.trim();
    if (mobile.length < 10) {
        return { success: false, message: "Mobile should be atleast 10 characters" };
    }
    if (mobile.length > 10) {
        let extra = mobile.slice(0, mobile.length - 10);
        if (!(extra == "+91" || extra == "0" || extra == "91")) {
            return { success: false, message: "Invalid Mobile" };
        }
        mobile = mobile.slice(mobile.length - 10);
    }
    let pattern = /^[6-9]\d{9}$/;
    if (!pattern.test(mobile)) {
        return { success: false, message: "Invalid Mobile" };
    }
    return { success: true, message: "Mobile is valid" };
}

export const ValidatePinCode = function (pincode) {
    if (!pincode) {
        return { success: false, message: "Pincode is required" };
    }
    pincode = pincode?.toString()?.trim();
    if (pincode.length != 6) {
        return { success: false, message: "Pincode should be 6 characters" };
    }
    let pattern = /^\d{6}$/;
    if (!pattern.test(pincode)) {
        return { success: false, message: "Invalid Pincode" };
    }
    return { success: true, message: "Pincode is valid" };
}


export const ValidatePassword = function (password) {
    if (!password) {
        return { success: false, message: "Password is required" };
    }
    password = password?.toString()?.trim();
    if (password.includes(" ")) {
        return { success: false, message: "Password should not contain spaces" };
    }
    if (password.length > 20) {
        return { success: false, message: "Password should be less than 20 characters" };
    }
    if (password.length < 6) {
        return { success: false, message: "Password should be atleast 6 characters" };
    }
    return { success: true, message: "Password is valid" };
}


export const ValidateState = function (state) {
    if (!state) {
        return { success: false, message: "State is required" };
    }
    state = state?.toString()?.trim();
    let states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
    if (state.length < 3) {
        return { success: false, message: "State should be atleast 3 characters" };
    }
    state = state.toLowerCase();
    for (let i = 0; i < states.length; i++) {
        if (states[i].toLowerCase() == state) {
            return { success: true, message: "State is valid" };
        }
    }
    return { success: false, message: "Invalid State" };
}

export const ValidateString = function (str) {
    if (!str) {
        return { success: false, message: "Field is required" };
    }
    str = str?.toString()?.trim();
    if (str.length < 1) {
        return { success: false, message: "Field should be atleast 1 characters" };
    }
    return { success: true, message: "Field is valid" };
}

export const ValidateNumber = function ValidateNumber(num) {
    if (!num) {
        return { success: false, message: "Field is required" };
    }
    num = num?.toString()?.trim();
    let pattern = /^\d+(\.\d+)?$/;
    if (!pattern.test(num)) {
        return { success: false, message: "Invalid Field" };
    }
    return { success: true, message: "Field is valid" };
}

const ValidatorsMapping = {
    "name": ValidateName,
    "email": validateEmail,
    "mobile": validateMobile,
    "pincode": ValidatePinCode,
    "password": ValidatePassword,
    "state": ValidateState,
    "string": ValidateString,
    "number": ValidateNumber
}

export default ValidatorsMapping;