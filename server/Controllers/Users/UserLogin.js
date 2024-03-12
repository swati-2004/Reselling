import User from "../../Models/UserSchema.js";
import { ValidateEmail, ValidatePassword } from "../../Utils/Validators/Validate.js";
import CryptoJs from "crypto-js";
import jwt from "jsonwebtoken";

const UserLogin = async (req,res)=>{
    try {
        const {email,password} = req?.body;
        if(!ValidateEmail(email).success || !ValidatePassword(password).success){
            return res.status(400).json({success:false,message:"Invalid email or password"});
        }
        let user = await User.findOne({email:email}).exec();
        let Byte =  CryptoJs.AES.decrypt(user.password, process.env.ENCRYPTION_KEY);
        let OriginalPassword =  Byte.toString(CryptoJs.enc.Utf8);
        if(OriginalPassword !== password){
            return res.status(400).json({success:false,message:"Invalid email or password"});
        }
        user.password = undefined;
        res.cookie("token", jwt.sign({ id: user._id,email:user.email }, process.env.JWT_SECRET, { expiresIn: "5d" }));
        return res.status(200).json({success:true,message:"User logged in successfully",user:user});
    } catch (error) {
       return res.status(500).json({success:false,message:"Internal server error"});
    }
}
export default UserLogin;