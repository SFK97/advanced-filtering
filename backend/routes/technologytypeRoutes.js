const express = require("express");
const technologytypeControllers = require("../controllers/technologytypeControllers");
const router = express.Router();

//@route - /api/v1/technologytypes/
router
  .route("/")
  .get(technologytypeControllers.getAllTechnologyTypes)
  .post(technologytypeControllers.createNewTechnologyType);

//@route - /api/v1/technologytypes/someid
router
  .route("/:id")
  .put(technologytypeControllers.updateTechnologyTypeById)
  .delete(technologytypeControllers.deleteTechnologyTypeById);

module.exports = router;
