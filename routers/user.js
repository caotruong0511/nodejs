import { Router } from "express";
import { Router } from "express";
import { list } from "../controllers/User";
import { checkAuth } from "../middlewares/checkAuth";

const User=Router();
User.get('user',checkAuth,list)
export default User;