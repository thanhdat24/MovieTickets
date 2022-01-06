"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LichChieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ NguoiDung, Rap,Phim }) {
      // define association here
      this.belongsTo(NguoiDung, { foreignKey: "idNguoiDung" });
      this.belongsTo(Rap, { foreignKey: "idRap" });
      this.belongsTo(Phim, { foreignKey: "idPhim" });
    }
  }
  LichChieu.init(
    {
      giaVe: DataTypes.DECIMAL,
      thoiLuong: DataTypes.INTEGER,
      ngayChieuGioChieu: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "LichChieu",
    }
  );
  return LichChieu;
};
