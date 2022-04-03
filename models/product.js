import mongoose, { Schema, ObjectId } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      minLength: 5,
      required: true,
      text:true
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    model:{
    type:Number
    },
    discount: {
        type:Number
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true });
  productSchema.index({"$**":'text'});
export default mongoose.model("Product", productSchema);
