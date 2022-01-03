const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "dat-24");
    if (decode) {
      req.NguoiDung = decode;
      return next();
    } else {
      res.status(401).send({
        statusCode: 401,
        message: "Bạn chưa đăng nhập!",
        dateTime: new Date(),
        messageConstants: null,
      });
    }
  } catch (error) {
    res.status(401).send({
      statusCode: 401,
      message: "Bạn chưa đăng nhập!",
      dateTime: new Date(),
      messageConstants: null,
    });
  }
};
module.exports = { authenticate };
