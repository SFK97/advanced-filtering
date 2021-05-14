const TechnologyType = require("../models/TechnologyType");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../middleware/errorHandler");

exports.getAllTechnologyTypes = asyncHandler(async (req, res, next) => {
  const technologytype = await TechnologyType.find(); //Send query to mongoDB database

  res.status(200).json({
    success: true,
    data: technologytype,
  });
});

exports.createNewTechnologyType = asyncHandler(async (req, res, next) => {
  const technologytype = await TechnologyType.create(req.body);

  res.status(201).json({
    success: true,
    data: technologytype,
  });
});

exports.updateTechnologyTypeById = asyncHandler(async (req, res, next) => {
  const technologytype = await TechnologyType.findById(req.params.id);

  if (!technologytype) {
    return next(
      new ErrorResponse(
        `TechnologyType with id ${req.params.id} was not found`,
        404
      )
    );
  }
  technologytype = await TechnologyType.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true } //Validators - new = newly updated version - runValidators = when new values added, run validators inside of model to make sure its valid
  );

  res.status(201).json({
    success: true,
    data: technologytype,
  });
});

exports.deleteTechnologyTypeById = asyncHandler(async (req, res, next) => {
  const technologytype = await TechnologyType.findById(req.params.id);

  if (!technologytype) {
    return next(
      new ErrorResponse(
        `TechnologyType with id ${req.params.id} was not found`,
        404
      )
    );
  }

  await technologytype.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
