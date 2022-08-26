const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
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

const PorductModel = mongoose.model("product", ProductSchema);

module.exports = PorductModel;