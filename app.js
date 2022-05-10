const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Router Imports
const product = require("./routes/product.route");
const user = require("./routes/user.route");
const order = require("./routes/order.route");

app.use("/api/v1", product);
app.use("/api/v1/", user);
app.use("/api/v1", order);

app.use(errorMiddleware);

module.exports = app;
