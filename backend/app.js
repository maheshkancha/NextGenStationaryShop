const express = require("express");
const productsRoute = require("./routes/products");
// const ordersRoute = require("./routes/orders");

const app = express();

// Middlewares
app.use(express.json());
app.use("/products", productsRoute);
// app.use("orders", ordersRoute);

module.exports = app;
