export const checkAuth= (req, res, next) => {
    const status = true;
    if (status) {
      console.log("chào xếp");
      next();
    } else {
      console.log("Anh không có quyền truy cập");
    }
  };