const authorize=(arrLoaiNguoiDung)=>(req, res, next) => {
  const { NguoiDung } = req;
  if (
    arrLoaiNguoiDung.findIndex((ele) => ele === NguoiDung.maLoaiNguoiDung) > -1
  ) {
    next();
  } else {
    res.status(403).send({
      statusCode: 403,
      message: "Bạn đã đăng nhập, nhưng không có quyền!",
      dateTime: new Date(),
      messageConstants: null,
    });
  }
};

module.exports = { authorize };
