import { Router } from "express";
const category =Router();
import { create, list, read, remove, update } from '../controllers/category.js';
import { userbyId } from "../controllers/User.js";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth.js";



category.post("/category/:useId",requireSignin,isAuth,isAdmin, create);
category.get("/category", list);
category.get("/category/:id", read);
category.delete("/category/:id/:useId",requireSignin,isAuth,isAdmin, remove);
category.put("/category/:id/:useId",requireSignin,isAuth,isAdmin, update);
category.param("useId",userbyId)
export default category;