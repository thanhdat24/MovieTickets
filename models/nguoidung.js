"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NguoiDung extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ LichChieu }) {
      // define association here
      this.hasMany(LichChieu, { foreignKey: "idNguoiDung" });
    }
  }
  NguoiDung.init(
    {
      taiKhoan: DataTypes.STRING,
      hoTen: DataTypes.STRING,
      email: DataTypes.STRING,
      soDt: DataTypes.STRING,
      matKhau: DataTypes.STRING,
      avatar: DataTypes.STRING,
      maLoaiNguoiDung: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["Khách hàng", "Quản trị"]],
        },
      },
    },
    {
      sequelize,
      modelName: "NguoiDung",
    }
  );
  return NguoiDung;
};
