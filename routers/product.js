import { Router } from "express"; //goi class rauter
import { create, list, read, remove, update } from "../controllers/product";
const router=Router();
import {checkAuth} from '../middlewares/checkAuth'

router.get('/products', checkAuth, list);

router.post('/products', checkAuth,create);
  
  router.get('/product/:id', checkAuth,read)
  router.delete('/product/:id', checkAuth,remove)
  router.put('/product/:id', checkAuth,update);


  export default router;
  
 
