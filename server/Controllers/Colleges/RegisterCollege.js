import College from "../../Models/CollegeSchema.js";
import ValidateAll from "../../Utils/Validators/ValidateAll.js";

const RegisterCollege = async (req, res) => {
    try {
        let {name, country, state, district, address, pincode, email, mobile, location} = req.body;
        let result = ValidateAll({name, country, state, district, address, pincode, email, mobile, location});

        if (!result.success) {
            return res
            .status(400)
            .json({
                success: false,
                message: result.message
            });
        }

        let college = await College
        .findOne({
            $or: [{email}, {mobile}]
        });

        if (college) {
            return res
            .status(400)
            .json({
                success: false, 
                message: "College already exists with this email or mobile number"
            });
        }

        let newCollege = new College(req.body);
        await newCollege.save();

        return res
        .status(201)
        .json({
            success: true,
            message: "College Registered Successfully"
        });

    } catch (error) {
        return res.status(500).json({success: false, message: "Internal server error"});
    }
}

export default RegisterCollege;