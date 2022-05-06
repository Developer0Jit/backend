const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//Router Imports
const product = require("./routes/product.route");
const user = require("./routes/user.route");

app.use("/api/v1", product);
app.use("/api/v1/", user);

app.use(errorMiddleware);

module.exports = app;
