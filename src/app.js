import express from "express";

import cors from 'cors';// cap quyen
import morgan from 'morgan'; // hien thi thong bao
import mongoose from "mongoose";

import router from '../routers/product'
import news from "../routers/new";
import User from "../routers/user";

const app = express();
app.use(cors()); //middrewe
app.use(morgan('tiny')); //hiển thị log trên server 
app.use(express.json()); //párser kieu du lieu 
// app.use("/api",router);

//router
app.use("/api",news);
app.use("/api",router);
app.use(User);
//connect datebase
mongoose.connect('mongodb://localhost:27017/we16309')
.then(()=>console.log("kết nối thành công"))
.catch((error)=>console.log(error));
//connection
const port = 3001;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
