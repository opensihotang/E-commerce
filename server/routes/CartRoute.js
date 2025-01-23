import express from "express";
import Cart from "../models/Cart.js";
import authenticate from "../middleware/authetication.js";

const router = express.Router();

router.post("/add-to-cart", authenticate(["user"]), async (req, res) => {
  try {
    const myCart = await Cart.findOne({ user: req.user._id });
    // console.log(req.body);

    if (myCart) {
      myCart.products.push(req.body.products);
      await myCart.save();
      res
        .status(200)
        .json({ message: "Berhasil menambahkan ke dalam keranjang" });
    } else {
      await Cart.create(req.body);
      res
        .status(200)
        .json({ message: "Berhasil menambahkan ke dalam keranjang" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
});

router.get("/mycart", authenticate(["user"]), async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    if (!cart) {
      res.status(404).json({ message: "Data Not Found" });
    } else {
      res.status(200).json({ message: "Successful", cart });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("mycart", authenticate(["user"]), async (req, res) => {
  try {
    const productId = req.params.id;
    const cart = Cart.findOne({ user: req.user._id });
    const product = cart.products.find(
      (product) => product._id.toString() == productId
    );
    if (product) {
      cart.products.pull(product);
    }
    await cart.save();
    res.status(200).json({ message: "product has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
