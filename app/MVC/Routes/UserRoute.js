const router = require('express').Router();
const User = require('../Models/UserModel');
const UserController = require('../Controllers/UserController');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/', UserController.getAllUsers);

module.exports = router;

