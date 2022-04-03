import { Router } from "express";
import { creat, list, read, remove, update } from "../controllers/new";
import { userbyId } from "../controllers/User";
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth";
const news=Router();

news.get('/new',checkAuth,list);
news.post('/new/:useId',requireSignin,isAuth,isAdmin,checkAuth,creat);
news.get('/new/:id',checkAuth,read);
news.delete('/new/:id/:useId',requireSignin,isAuth,isAdmin,checkAuth,remove);
news.put('/new/:id/:useId',requireSignin,isAuth,isAdmin,checkAuth,update);
news.param("useId",userbyId)
export default news;