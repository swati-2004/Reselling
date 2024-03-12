import User from "../../Models/UserSchema.js";
import ValidateAll from "../../Utils/Validators/ValidateAll.js";
import CryptoJs from "crypto-js";

const UserSingup = async (req, res) => {
    try {
        const { name, email, mobile, state, district, pincode, password } = req.body;
        let result = ValidateAll({ name, email, mobile, state, district, pincode, password });
        if (!result.success) {
            return res.status(400).json({ success: false, message: result.message });
        }
        let user = await User.findOne({ $or: [{ email: email }, { mobile: mobile }] }).exec();
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists with this email or mobile number" });
        }
        let EncryptedPassword = await CryptoJs.AES.encrypt(password, process.env.ENCRYPTION_KEY).toString();
        req.body.password = EncryptedPassword;
        let newUser = new User(req.body);
        await newUser.save();
        res.cookie("token", jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "5d" }))
        newUser.password = undefined;
        return res.status(201).json({ success: true, message: "User created successfully", user: newUser });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export default UserSingup;