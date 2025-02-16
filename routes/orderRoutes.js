import express from "express";
import { placeOrder, getOrders } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, placeOrder);  // Place an order
router.get("/", protect, getOrders);    // Get user orders

export default router;
