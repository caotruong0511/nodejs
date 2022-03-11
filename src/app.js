import express from "express";
const app = express();
import cors from 'cors';
import morgan from 'morgan';
import router from '../routers/product'
import postrouter from "../routers/post";

app.use(cors()); //middrewe
app.use(morgan('tiny')); //hiển thị log trên server 
app.use(express.json()); //post kiểu json 
// app.use("/api",router);
app.use(postrouter);
app.use(router);

const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
