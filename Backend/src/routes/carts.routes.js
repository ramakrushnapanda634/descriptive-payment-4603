const { Router } = require("express");
const CartModel = require("../models/carts.model");

const CartRouter = Router();

// get cart products by category
CartRouter.get("/", async (req, res) => {
    // console.log("req", req.params);
    try {
        const products = await CartModel.find()
        // console.log('products:', products.length)
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

// get single product by id
CartRouter.post("/", async (req, res) => {
    console.log('req:', req.body)
    try {
        let product = new CartModel(req.body)
        await product.save()
        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = CartRouter;