const mongoose = require("mongoose");

const connectionString = process.env.DATABASE_CONNECTION;

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB Connection SUCCESS");
  } catch (error) {
    console.log("MongoDB Connection FAILED");
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
