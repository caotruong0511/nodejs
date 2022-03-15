import mongoose,{Schema} from "mongoose";

const userSchema={
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
}
export default mongoose.model('User',userSchema);