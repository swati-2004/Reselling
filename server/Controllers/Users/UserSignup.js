// import User from "../../Models/UserSchema.js";
// import validateEmail from "../../Utils/Validators/Validate.js";
import Validators from "../../Utils/Validators/Validate.js";
console.log(Validators.ValidateName("Rahul").success);

// const UserSingup = async(req,res)=>{
//     try {
//         let UserData = req?.body;
//         let {name, email, mobile, password, state, district,pincode} = UserData;
//         console.log(UserData);
//         ;(()=>{
//             if(!name || !email || !mobile || !password || !state || !district || !pincode){
//                 return res.status(400).json({success:false,message:"All fields are required"});
//             }
            
            
//         })();
//     } catch (error) {
        
//     }
// }

// export default UserSingup;

// console.log(Validators);