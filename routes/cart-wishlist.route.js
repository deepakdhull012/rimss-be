const express = require("express");
export const CartController = require("./../controllers/cart.controller");

export const CartWishListRouter = express.Router();


CartWishListRouter.post("/searchBycategory", CartController.fetchByCategory);


module.exports = {
    CartWishListRouter
}
