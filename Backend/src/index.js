const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const ProductsRouter = require("./routes/products.routes");
const CartRouter = require("./routes/carts.routes");
const cors = require("cors");

require("dotenv").config()
// NODE_ENV=prod npm run start
// NODE_ENV=dev npm run start
const conn = mongoose.connect(process.env.MONGO_URL);
// const conn = mongoose.connect(config.get("db.url"));
// console.log('confi url:', config.get("db.url"))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/product", ProductsRouter);
app.use("/cart", CartRouter);

app.listen(process.env.PORT, async () => {
    try {
        await conn
        console.log("Connected to DB");
    }
    catch {
        console.log("error");
    }
});