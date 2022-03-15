import { Router } from "express";
import { creat, list, read, remove, update } from "../controllers/new";
import { checkAuth } from "../middlewares/checkAuth";
const news=Router();

news.get('/new',checkAuth,list);
news.post('/new',checkAuth,creat);
news.get('/new/:id',checkAuth,read);
news.delete('/new/:id',checkAuth,remove);
news.put('/new/:id',checkAuth,update);

export default news;