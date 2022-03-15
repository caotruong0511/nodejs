import Product from '../models/product';
//list sản phẩm
export const list =async (req, res) => {
    try {
        const products=await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message:"Không thêm được sản phẩm anh ei"
        })
    }
//   res.json(products);
};
//post sản phẩm
export const create =async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        
        res.json(product)   
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
//   products.push(req.body);
//   res.json(products);
};

export const read = async(req, res) => {
    try {
        const product=await Product.findOne({_id:req.params.id}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message:"Hiển thị dữ liêu không thành công"
        })
    }
//   res.json(products.find((item) => item.id === +req.params.id));
};
export const remove =async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id:req.params.id}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error:"Xoá không thành công"
        })
    }
//   res.json(products.filter((item) => item.id === +req.params.id));
};
export const update= async(req, res) => {
    const codition ={id:req.params.id}
    const update = req.body

try {
    const product= await Product.findOneAndUpdate(codition,update,{new:true}).exec();
    res.json(product)
    
} catch (error) {
    res.status(400).json({
        error:"Xoá không thành công"
    })
}

    // res.json(products.map((item) => item.id ==req.params.id ? req.body :item));
  };