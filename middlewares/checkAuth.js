import expressJWT from "express-jwt"

export const checkAuth= (req, res, next) => {
  console.log('a')
    const status = true;
    if (status) {
      console.log("chào xếp");
      next();
    } else {
      console.log("Anh không có quyền truy cập");
    }
  };


  export const requireSignin=expressJWT({
    algorithms:["HS256"],
    secret:"123456",
    requestProperty:"auth"
  });
  export const isAuth=(req,res,next,id)=>{
    const status= req.profile._id==req.auth._id;
    if(!status){
      res.status(400).json({
        message:"ban khong co quyen truy cap"
      })
    }
    next()

  }
  export const isAdmin=(req,res,next)=>{
    console.log(req.profile)
    if(req.profile.roll != 2){
      res.status(401).json({
        message: "Bạn không phải là admin"
    })
    }
    next();
  }