import express from "express";
import Product from "../models/products.model.mjs";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const createdProduct = await Product.create(req.body);
    res.status(200).json(createdProduct);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndUpdate(productId, req.body);

    if (!product) {
      res.status(404).json({ message: "Not found" });
    }

    const updatedProduct = await Product.findById(productId);
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

export default router;
