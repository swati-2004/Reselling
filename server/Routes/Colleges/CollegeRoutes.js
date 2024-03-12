import { Router } from "express";
import RegisterCollege from "../../Controllers/Colleges/RegisterCollege.js";

const router = Router();

router.post("/register", RegisterCollege);

export default router;