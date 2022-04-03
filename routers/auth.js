import { Router } from "express";
import { signin, singup } from "../controllers/auth";

const router=Router();
router.post('/signup',singup),
router.post('/signin',signin)
export default router;