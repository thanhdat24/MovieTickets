"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CumRap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ HeThongRap, Rap }) {
      // define association here
      this.belongsTo(HeThongRap, { foreignKey: "HeThongRap_id" });
      this.hasMany(Rap, { foreignKey: "CumRap_id" });
    }
  }
  CumRap.init(
    {
      maCumRap: { type: DataTypes.STRING, allowNull: false },
      tenCumRap: { type: DataTypes.STRING, allowNull: false },
      diaChi: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "CumRap",
    }
  );
  return CumRap;
};
