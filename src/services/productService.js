const Product = require('../models/productModel');

const createProduct = async (data) => {
  const product = new Product(data);
  return await product.save();
};

const getAllProducts = async () => {
  return await Product.find().populate('category');
};

const getProductById = async (id) => {
  return await Product.findById(id).populate('category');
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true }).populate('category');
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

const getDashboardStats = async () => {
  const total = await Product.countDocuments();
  const completed = await Product.countDocuments({ isCompleted: true });
  const totalQuote = await Product.aggregate([
    { $group: { _id: null, total: { $sum: '$quote' } } }
  ]);

  return {
    total,
    completed,
    totalQuote: totalQuote[0]?.total || 0
  };
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getDashboardStats
};
