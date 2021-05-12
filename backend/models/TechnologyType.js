const mongoose = require("mongoose");

const technologytypeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide a name to the TechnologyType"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating for a TechnologyType"],
  },
  description: {
    type: String,
    required: [true, "Please provide a TechnologyType with description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a TechnologyType with price"],
  },
});

const TechnologyType = mongoose.model("TechnologyType", technologytypeSchema);

module.exports = TechnologyType;
