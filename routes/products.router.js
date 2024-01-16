const express = require("express");
const productsRouter = express.Router();
const productsController = require("../controllers/products.controller");

productsRouter.post("/", productsController.createProduct);
productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:productId", productsController.getProductById);
productsRouter.put("/:productId", productsController.updateProduct);
productsRouter.delete("/:productId", productsController.deleteProduct);

module.exports = productsRouter;
