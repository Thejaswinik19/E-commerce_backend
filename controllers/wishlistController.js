import User from '../models/UserModel.js';
import Product from '../models/ProductModel.js';

// @desc    Add product to wishlist
// @route   POST /api/wishlist/:productId
// @access  Private (User only)
export const addToWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const product = await Product.findById(req.params.productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (!user.wishlist.includes(product._id)) {
      user.wishlist.push(product._id);
      await user.save();
    }

    res.status(200).json({ message: 'Product added to wishlist', wishlist: user.wishlist });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get user wishlist
// @route   GET /api/wishlist
// @access  Private (User only)
export const getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('wishlist');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user.wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Remove product from wishlist
// @route   DELETE /api/wishlist/:productId
// @access  Private (User only)
export const removeFromWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const productId = req.params.productId;

    user.wishlist = user.wishlist.filter((id) => id.toString() !== productId);
    await user.save();

    res.status(200).json({ message: 'Product removed from wishlist', wishlist: user.wishlist });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
