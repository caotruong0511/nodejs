import Product from '../models/product';
//list sản phẩm
export const detail =async (req, res) => {
    const filter=req.query.id
    console.log(filter)
    try {
        const products=await Product.find({category:filter}).populate("category");
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message:"Không hien thi được sản phẩm anh ei"
        })
    }
};
export const list =async (req, res) => {
  
    try {
        const products=await Product.find().populate("category");
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message:"Không hien thi được sản phẩm anh ei"
        })
    }
};
export const getByModel = async (req, res) => {
    const model = req.params.model;
    try {
        const products = await Product.find({ model }).exec();
        res.json(products);
    } catch (error) {
        console.log(error);
    }
}

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
        const product=await Product.findOne({_id:req.params.id }).exec();
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
    const codition ={_id:req.params.id}
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

 export const search=async(req,res)=>{
  const searchString= req.query.q ? req.query.q : "";
  const result = await Product.find({$text : {$search:searchString}}).exec();
  res.json(result)
  }
  