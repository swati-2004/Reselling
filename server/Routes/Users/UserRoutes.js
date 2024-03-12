import { Router } from "express";
import UserSingup from "../../Controllers/Users/UserSignup.js";
import CheckLoggedInStatus from "../../Middlewares/Users/CheckLoggedInStatus.js";
import UserLogin from "../../Controllers/Users/UserLogin.js";


const router = Router();

//User Login Route
router.post("/login",CheckLoggedInStatus,UserLogin);

//User Signup Route
router.post("/signup",UserSingup);

export default router;
