import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, admin, createProduct); // Create product (Admin only)
router.get('/', getProducts); // Get all products
router.get('/:id', getProductById); // Get product by ID
router.put('/:id', protect, admin, updateProduct); // Update product (Admin only)
router.delete('/:id', protect, admin, deleteProduct); // Delete product (Admin only)

export default router;
