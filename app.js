const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//Router Imports
const product = require("./routes/product.route");

app.use("/api/v1", product);

app.use(errorMiddleware);

module.exports = app;
