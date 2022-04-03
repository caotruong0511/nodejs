
import User from "../models/user";
export const userbyId=async(req,res,next,id)=>{
    try {
        const user=await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile=user;
        next();
    } catch (error) {
        
    }
}
export const list =async(req,res)=>{
   
    try {
        const user=await User.find();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"Không hiển thị danh sách user"
        })
    }
}
export const creat =async (req,res)=>{
    try {
        console.log(req.body)
        const post=await User(req.body).save();
        
        res.json(post) 
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được user"
        })
    }
}
export const read = async(req,res)=>{
    try {
        const post=await User.findOne({_id:req.params.id}).exec();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message:"Không hiển thị được user"
        })
    }
}
export const remove= async(req,res)=>{
    try {
        const post=await User.findOneAndDelete({_id:req.params.id}).exec();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message:"Không xoa được user"
        })
    }
}
export const update=async(req,res)=>{
    try {
        const post = await User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).exec();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message:"Không cap nhat được user"
        })
    }
}