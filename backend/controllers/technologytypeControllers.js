const TechnologyType = require("../models/TechnologyType");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../middleware/errorHandler");

exports.getAllTechnologyTypes = asyncHandler(async (req, res, next) => {
  let query;

  const reqQuery = { ...req.query }; //take the query param and spread it

  const removeFields = ["sort"]; //specify which fields to remove

  removeFields.forEach((val) => delete reqQuery[val]); //remove field from reqQuery obj

  let queryString = JSON.stringify(reqQuery); //turn obj into a string

  queryString = queryString.replace(
    //manipulate string if it contains any of these characters
    /\b(gt|gte|lt|lte|in)\b/g, //special operators
    (match) => `$${match}` //add dollar sign infront of it - mongoDB special character for function or special operator
  );

  query = TechnologyType.find(JSON.parse(queryString)); //add json parsed version of the string

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(",");

    const sortByString = sortByArr.join(" ");

    query = query.sort(sortByString);
  } else {
    query = query.sort("-price");
  }

  const technologytype = await query; //Send query to mongoDB database

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
  let technologytype = await TechnologyType.findById(req.params.id);

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
  let technologytype = await TechnologyType.findById(req.params.id);

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
