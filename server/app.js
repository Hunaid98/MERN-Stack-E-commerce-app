const express = require("express");
const productRouter = require("./route/productRoute");
const authRouter = require("./route/authRoute");
const itemRouter = require("./route/itemRoute");
const orderRouter = require("./route/orderRoute")
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors({
    'Access-Control-Allow-Origin': "*"
}));
//routes
app.use("/api/v1/product", productRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/item", itemRouter);
// app.use("/api/v1/item/:getSpId/order",itemRouter, orderRouter)
module.exports = app;
