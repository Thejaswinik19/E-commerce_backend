import Cart from "../models/CartModel.js";
import Product from "../models/ProductModel.js";

// @desc    Add product to cart
// @route   POST /api/cart
// @access  Private
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const existingProduct = cart.products.find((p) => p.productId.toString() === productId);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart" });
  }
};

export const getCart = async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.user._id }).populate("products.productId");
      if (!cart) return res.status(404).json({ message: "Cart is empty" });
  
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cart" });
    }
  };

  export const updateCart = async (req, res) => {
    try {
      const { productId } = req.params;
      const { quantity } = req.body;
  
      const cart = await Cart.findOne({ userId: req.user._id });
      if (!cart) return res.status(404).json({ message: "Cart not found" });
  
      const product = cart.products.find((p) => p.productId.toString() === productId);
      if (!product) return res.status(404).json({ message: "Product not in cart" });
  
      product.quantity = quantity;
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: "Error updating cart" });
    }
  };

  export const removeFromCart = async (req, res) => {
    try {
      const { productId } = req.params;
  
      const cart = await Cart.findOne({ userId: req.user._id });
      if (!cart) return res.status(404).json({ message: "Cart not found" });
  
      cart.products = cart.products.filter((p) => p.productId.toString() !== productId);
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: "Error removing from cart" });
    }
  };
  