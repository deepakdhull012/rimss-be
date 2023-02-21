const express = require("express");
const ProductController = require("./../controllers/product.controller");

const ProductRouter = express.Router();


ProductRouter.post("/searchBycategory", ProductController.fetchByCategory);

module.exports = {
    ProductRouter
}