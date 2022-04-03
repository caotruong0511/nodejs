
import User from '../models/user';
import jwt from "jsonwebtoken";

export const singup =async (req,res)=>{
    const {name,email,password,roll}= req.body;
    try {
    const existUser= await User.findOne({email}).exec();
    if(existUser){
        res.status(400).json({
        message:"email da ton tai"
        })
    }
    const user = await new User({email, name, password,roll}).save();
    res.json({
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            roll:user.roll
        }
    })
    } catch (error) {
        res.status(400).json({
            message:"Không thêm được tài khoản"
        })
    }
}
export const signin=async(req,res)=>{
    
const {email,password}=req.body;
try {
    const user=await User.findOne({email}).exec();
    if(!user){
        res.status(400).json({
            message:"Tài khoản không tồn tại",
        })
    }
    if(!user.authenticate(password)){
        res.status(400).json({
            message:"Mật khẩu không đúng",
        })
    }
    const token=jwt.sign({_id:user._id},"123456",{expiresIn:"1h"})
    res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name,
            roll:user.roll,
        }
    })
} catch (error) {
    res.status(400).json({
        message:"loi"
    })
}
}


