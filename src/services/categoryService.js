const Category = require('../models/categoryModel');

const createCategory = async (data, userId) => {
  const category = new Category({
    name: data.name,
    description: data.description || '',
    owner: userId
  });
  return await category.save();
};

const getAllCategories = async (userId) => {
  return await Category.find({ owner: userId });
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const updateCategory = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};
