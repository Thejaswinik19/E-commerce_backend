import Cart from "../models/CartModel.js";
import Order from "../models/OrderModel.js";

export const placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate("products.productId");
    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const totalAmount = cart.products.reduce((acc, p) => acc + p.productId.price * p.quantity, 0);

    const order = new Order({
      userId: req.user._id,
      products: cart.products,
      totalAmount,
    });

    await order.save();
    await Cart.deleteOne({ userId: req.user._id });  // Empty cart after order

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error placing order" });
  }
};

export const getOrders = async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.user._id }).populate("products.productId");
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: "Error fetching orders" });
    }
  };

  