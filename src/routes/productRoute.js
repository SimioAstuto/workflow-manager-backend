const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/dashboard', productController.getDashboardStats);
router.get('/:id', productController.getProductById);
router.put('/:id', verifyToken, productController.updateProduct);
router.delete('/:id', verifyToken, productController.deleteProduct);

module.exports = router;
