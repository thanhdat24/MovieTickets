"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LichChieu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ NguoiDung, Rap, Phim }) {
      // define association here
      this.belongsTo(NguoiDung, { foreignKey: "idNguoiDung" });
      this.belongsTo(Rap, { foreignKey: "idRap" });
      this.belongsTo(Phim, { foreignKey: "idPhim" });
    }
  }
  LichChieu.init(
    {
      giaVe: {
        type: DataTypes.DECIMAL,
        validate: {
          isIn: [["75000", "100000", "120000", "150000"]],
        },
      },
      thoiLuong: {
        type: DataTypes.INTEGER,
        validate: {
          max: 180,
          min: 60,
        },
      },
      ngayChieuGioChieu: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: "LichChieu",
    }
  );
  return LichChieu;
};
