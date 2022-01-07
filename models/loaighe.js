"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LoaiGhe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ghe }) {
      // define association here
      this.hasMany(Ghe, { foreignKey: "idLoaiGhe" });
    }
  }
  LoaiGhe.init(
    {
      tenLoaiGhe: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["Thuong", "Vip"]],
        },
      },
    },
    {
      sequelize,
      modelName: "LoaiGhe",
    }
  );
  return LoaiGhe;
};
