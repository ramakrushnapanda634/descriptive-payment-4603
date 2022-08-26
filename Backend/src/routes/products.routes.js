const { Router } = require("express");
const PorductModel = require("../models/products.model");

const ProductsRouter = Router();

ProductsRouter.get("/:category", async (req, res) => {
    //console.log("req", req.params);
    try {
        const products = await PorductModel.find(req.params)
        //console.log('products:', products.length)
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

module.exports = ProductsRouter;