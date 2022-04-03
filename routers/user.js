import { Router } from "express"; //goi class rauter

import { creat, list, read, remove, update, userbyId, } from "../controllers/User";
const router=Router();
import {checkAuth, isAdmin, isAuth, requireSignin} from '../middlewares/checkAuth'

router.get('/users', checkAuth, list);

router.post('/users/:useId',requireSignin,isAuth,isAdmin ,creat);
  
  router.get('/users/:id', checkAuth,read)
  router.delete('/users/:id/:useId',requireSignin,isAuth,isAdmin, checkAuth,remove)
  router.put('/users/:id/:useId',requireSignin,isAuth,isAdmin, checkAuth,update);
router.param("useId",userbyId)
  export default router;
  