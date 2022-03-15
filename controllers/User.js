import User from '../models/user';

export const list =async (req,res)=>{
    try {
        const user=await User.find();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"Không thêm được sản phẩm anh ei"
        })
    }
}
export const creat =async (req,res)=>{
    try {
        const user=await User(req.body).save();
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message:"Không thêm được sản phẩm anh ei"
        })
    }
}