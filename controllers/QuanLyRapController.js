const { HeThongRap, sequelize } = require("../models");

const createHeThongRap = async (req, res) => {
  const { maHeThongRap, tenHeThongRap, biDanh, logo } = req.body;
  console.log("tenHeThongRap", tenHeThongRap);
  try {
    const newHeThongRap = await HeThongRap.create({
      maHeThongRap,
      tenHeThongRap,
      biDanh,
      logo,
    });
    res.status(201).send(newHeThongRap);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getAllHeThongRap = async (req, res) => {
  try {
    const [results] = await sequelize.query(`
   select maHeThongRap, tenHeThongRap, biDanh, logo
  from hethongraps`);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deleteHeThongRap = async (req, res) => {
  const { id } = req.params;
  try {
    await HeThongRap.destroy({ where: { id } });
    res.status(200).send("Delete success!");
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  createHeThongRap,
  getAllHeThongRap,
  deleteHeThongRap,
};
