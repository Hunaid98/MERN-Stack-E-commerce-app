const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
    username: String,
    userId: mongoose.Schema.ObjectId,
    itemId: mongoose.Schema.ObjectId,
    address: String,
    phoneNumber: String,
    totalPrice: Number,
})

const Order = new mongoose.model("Order", orderSchema)
module.exports = Order;