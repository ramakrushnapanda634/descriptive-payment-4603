const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    title: String,
    imgUrl: String,
    imgArray: Array,
    description: String,
    price: Number,
    strikePrice: Number,
    qty: Number,
    rating: Number,
    category: String,
    subcategory: String,
    sizes: Array,
    brand: String,
    reviews: Array,
});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;