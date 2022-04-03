import { Router } from "express"; //goi class rauter
import { create, list, read, remove, update,search,detail, getByModel } from "../controllers/product";
import { userbyId } from "../controllers/User";
const router=Router();
import {checkAuth, isAdmin, isAuth, requireSignin} from '../middlewares/checkAuth'

router.get('/products', checkAuth, list);
router.get('/product', checkAuth, detail);
router.get("/products/getByModel/:model", getByModel);

router.post('/products/:useId',requireSignin,isAuth,isAdmin ,create);
  
  router.get('/products/:id', checkAuth,read)

  router.delete('/products/:id/:useId',requireSignin,isAuth,isAdmin, checkAuth,remove)
  router.put('/products/:id/:useId',requireSignin,isAuth,isAdmin, checkAuth,update);
  router.post('/search',search);
router.param("useId",userbyId)
  export default router;
  
 
