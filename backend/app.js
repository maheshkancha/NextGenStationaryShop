const express = require("express");
const productsRoute = require("./routes/products");
const cors = require("cors");
// const ordersRoute = require("./routes/orders");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/products", productsRoute);
// app.use("orders", ordersRoute);

module.exports = app;
