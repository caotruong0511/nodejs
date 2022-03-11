import { Router } from "express";
const router=Router();
import {checkAuth} from '../middlewares/checkAuth'

router.get('/products', checkAuth, (req, res) => {
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    res.json(products);
});

router.post('/products', checkAuth, (req, res) => {
    console.log(req);
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    products.push(req.body);
    res.json(products);
  });
  
  router.delete('/product/:id',(req,res)=>{
    const products = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    res.json(products.filter(item => item.id===+req.params.id));
  })



  export default router;
  
 
