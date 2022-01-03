"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HeThongRap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CumRap }) {
      // define association here
      this.hasMany(CumRap, { foreignKey: "HeThongRap_id" });
    }
  }
  HeThongRap.init(
    {
      maHeThongRap: { type: DataTypes.STRING, allowNull: false },
      tenHeThongRap: { type: DataTypes.STRING, allowNull: false },
      biDanh: { type: DataTypes.STRING, allowNull: false },
      logo: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "HeThongRap",
    }
  );
  return HeThongRap;
};
