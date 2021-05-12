const TechnologyType = require("../models/TechnologyType");

exports.getAllTechnologyTypes = (req, res, next) => {
  res.send("Get all TechnologyTypes route");
};

exports.createNewTechnologyType = (req, res, next) => {
  res.send("Create new TechnologyTypes route");
};

exports.updateTechnologyTypeById = (req, res, next) => {
  res.send("Update a TechnologyType by id route");
};

exports.deleteTechnologyTypeById = (req, res, next) => {
  res.send("Delete a TechnologyType by id route");
};
