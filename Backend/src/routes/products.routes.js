const { Router } = require("express");
const PorductModel = require("../models/products.model");

const ProductsRouter = Router();

// get products by category
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

// get single product by id
ProductsRouter.get("/productdetail/:_id", async (req, res) => {
    try {
        let product = await PorductModel.findOne(req.params)

        return res.status(200).send(product);

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = ProductsRouter;