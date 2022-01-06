'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({LichChieu}) {
      // define association here
      this.hasMany(LichChieu, { foreignKey: "idPhim" });

    }
  };
  Phim.init({
    tenPhim: DataTypes.STRING,
    biDanh: DataTypes.STRING,
    trailer: DataTypes.STRING,
    hinhAnh: DataTypes.STRING,
    moTa: DataTypes.STRING,
    ngayKhoiChieu: DataTypes.DATE,
    danhGia: DataTypes.INTEGER,
    hot: DataTypes.BOOLEAN,
    dangChieu: DataTypes.BOOLEAN,
    sapChieu: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Phim',
  });
  return Phim;
};