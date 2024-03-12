import { Router } from "express";
import UserSingup from "../../Controllers/Users/UserSignup.js";
import CheckLoggedInStatus from "../../Middlewares/Users/CheckLoggedInStatus.js";
import UserLogin from "../../Controllers/Users/UserLogin.js";
import UserLogout from "../../Controllers/Users/UserLogout.js";

const router = Router();

//User Login Route
router.post("/login",CheckLoggedInStatus,UserLogin);

//User Signup Route
router.post("/signup",UserSingup);

//User Logout Route
router.get("/logout",UserLogout);

export default router;
