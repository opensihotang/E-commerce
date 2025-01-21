import express from "express";
import Product from "../models/Product.js";
import authenticate from "../middleware/authetication.js";
const router = express.Router();

router.get("/show-products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    const product = await Product.findOne({ name: req.params.name });
    if (!product) {
      return res.status(404).json({ message: "Product tidak di temukan" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post(
  "/add-products",
  authenticate(["admin"]),
  async (req, res, next) => {
    try {
      const { name, description, category, price, capital, stock, weight } =
        req.body;
      const profit = price - capital;
      const newProduct = await Product.create({
        name: name,
        description: description,
        category: category,
        price: price,
        capital: capital,
        stock: stock,
        weight: weight,
        profit: profit,
      });
      if (!newProduct) {
        res.status(400).json("Fail to add product");
      } else {
        res.status(200).json({ message: "Successful", newProduct });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.delete(
  "/delete/:id",
  authenticate(["admin"]),
  async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);

      await product.deleteOne();
      res
        .status(200)
        .json({ message: `Product with id :${product.id} has been deleted` });
    } catch (error) {
      if (error.name === "CastError") {
        res.status(404).json({ message: "Product Not Found" });
      } else {
        res.status(500).json({ error: error });
      }
    }
  }
);

router.put("/update/:id", authenticate(["admin"]), async (req, res, next) => {
  try {
    const { name, description, category, price, capital, stock, weight } =
      req.body;
    // const profit = price - capital;
    let product = await Product.findById(req.params.id);
    const updatedProduct = {
      name: name,
      description: description,
      category: category,
      price: price,
      capital: capital,
      stock: stock,
      weight: weight,
      //   profit: profit,
    };
    product = await Product.findByIdAndUpdate(req.params.id, updatedProduct, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: `Product with id : ${product.id} has been updated`,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
