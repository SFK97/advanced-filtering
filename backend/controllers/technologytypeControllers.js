const TechnologyType = require("../models/TechnologyType");
const asyncHandler = require("../middleware/asyncHandler");

exports.getAllTechnologyTypes = asyncHandler(async (req, res, next) => {
  const technologytype = await TechnologyType.find(); //Send query to mongoDB database

  res.status(200).json({
    success: true,
    data: technologytype,
  });
});

exports.createNewTechnologyType = asyncHandler(async (req, res, next) => {
  res.send("Create new TechnologyTypes route");
});

exports.updateTechnologyTypeById = asyncHandler(async (req, res, next) => {
  res.send("Update a TechnologyType by id route");
});

exports.deleteTechnologyTypeById = asyncHandler(async (req, res, next) => {
  res.send("Delete a TechnologyType by id route");
});
