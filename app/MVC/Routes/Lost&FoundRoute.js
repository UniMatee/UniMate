const router = require('express').Router();
const LostFoundController = require('../Controllers/Lost&FoundController');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: "Unauthorized access" });
};

// Routes
router.post('/create', isAuthenticated, LostFoundController.createLostFoundItem);
router.get('/', isAuthenticated, LostFoundController.getAllLostFoundItems);

module.exports = router;
