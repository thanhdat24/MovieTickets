"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ghe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ LoaiGhe, Rap }) {
      // define association here
      this.belongsTo(LoaiGhe, { foreignKey: "idLoaiGhe" });
      this.belongsTo(Rap, { foreignKey: "idRap" });
    }
  }
  Ghe.init(
    {
      tenGhe: DataTypes.STRING,
      stt: DataTypes.STRING,
      daDat: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Ghe",
    }
  );
  return Ghe;
};
