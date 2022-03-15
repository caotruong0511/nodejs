import mongoose,{Schema} from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        minLength:5,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
},{ timestamps:true });
export default mongoose.model('Product',productSchema)