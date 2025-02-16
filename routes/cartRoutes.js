import express from "express";
import { addToCart, getCart, updateCart, removeFromCart } from "../controllers/cartController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addToCart);  // Add item to cart
router.get("/", protect, getCart);     // Get user's cart
router.put("/:productId", protect, updateCart); // Update item quantity
router.delete("/:productId", protect, removeFromCart); // Remove item from cart

export default router;
