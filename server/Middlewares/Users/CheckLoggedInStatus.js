import jwt from 'jsonwebtoken';
import User from '../../Models/UserSchema.js';

const CheckLoggedInStatus = async (req, res, next) => {
    try {
        // Cheakc if the user jwt token is present in the cookies
        const token = req?.cookies?.token;

        // check if the email is present in the request body
        const {email} = req.body;

        // if the email and token is present in the request body then clear the cookie and move to the next middleware
        if(email && token){
    
            res.clearCookie("token");
            next();
            return;
        }
        
        // if the token is present in the request body then verify the token and check if the user is present in the database
        if(token){
            let user = jwt.verify(token, process.env.JWT_SECRET);

            //find the user in the database by the id present in the jwt token
            let loggedInUser = await User.findById(user.id).exec();

            //if user is presenet in the database and email of user and token is same then send the user details to the client
            if(loggedInUser && loggedInUser.email === user.email){

                //remove the password from the user details
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
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

export default CheckLoggedInStatus;