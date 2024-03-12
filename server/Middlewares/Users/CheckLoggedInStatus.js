import jwt from 'jsonwebtoken';
import User from '../../Models/UserSchema.js';

const CheckLoggedInStatus = async (req, res, next) => {
    const token = req?.cookies?.token;
    const {email} = req.body;
    if(email && token){

        res.clearCookie("token");
        console.log("I am called");
        next();
        return;
    }
    console.log("I am vallled");
    if(token){
        let user = jwt.verify(token, process.env.JWT_SECRET);
        let loggedInUser = await User.findById(user.id).exec();
        if(loggedInUser && loggedInUser.email === user.email){
            loggedInUser.password = undefined;
            return res.status(200).json({success:true,message:"User is logged in",user:loggedInUser});
        }
        if(!email){
            return res.status(400).json({success:false,message:"Please provide email to login"});
        }
        next();
        return;
    }
    if(!email){
        return res.status(400).json({success:false,message:"Please provide email to login"});
    }
    next();
    return;
}

export default CheckLoggedInStatus;