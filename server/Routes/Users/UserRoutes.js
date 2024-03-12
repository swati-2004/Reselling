import { Router } from "express";
import UserSingup from "../../Controllers/Users/UserSignup.js";


const router = Router();

router.post("/signup",UserSingup);

export default router;
