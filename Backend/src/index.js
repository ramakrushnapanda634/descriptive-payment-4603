const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const ProductsRouter = require("./routes/products.routes");
const cors = require("cors");

const conn = mongoose.connect(config.get("db.url"));
// console.log('confi url:', config.get("db.url"))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", ProductsRouter);

app.listen(config.get("port"), () => {
    console.log(`Server started on port ${config.get("port")}`);
})