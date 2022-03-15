import mongoose from "mongoose";

const News= mongoose.model('New',{name:String,Title:String,img:String,desc:String})
// list bai viet
export const list =async(req,res)=>{
    try {
        const New=await News.find();
        res.json(New)
    } catch (error) {
        res.status(400).json({
            message:"Không hiển thị thêm bài viết"
        })
    }
}


export const creat =async (req,res)=>{
    try {
        const post=await News(req.body).save();
        res.json(post) 
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết"
        })
    }
}
export const read = async(req,res)=>{
    try {
        const post=await News.findOne({_id:req.params.id}).exec();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message:"Không hiển thị được bài viết"
        })
    }
}
export const remove= async(req,res)=>{
    try {
        const post=await News.findOneAndDelete({_id:req.params.id}).exec();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message:"Không xoa được bài viết"
        })
    }
}
export const update=async(req,res)=>{
    try {
        const post = await News.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).exec();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message:"Không cap nhat được bài viết"
        })
    }
}