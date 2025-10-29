const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/update-password', verifyToken, userController.updatePassword);
router.put('/update-email', verifyToken, userController.updateEmail);

module.exports = router;
