"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ CumRap }) {
      // define association here
      this.belongsTo(CumRap, { foreignKey: "CumRap_id" });
    }
  }
  Rap.init(
    {
      maRap: DataTypes.INTEGER,
      tenRap: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Rap",
    }
  );
  return Rap;
};
