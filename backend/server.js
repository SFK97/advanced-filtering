require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/api/v1/technologytype", require("./routes/technologytypeRoutes"));

//Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server Running On PORT ${PORT}`));
