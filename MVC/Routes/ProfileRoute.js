const router = require('express').Router();
const ProfileController = require('../Controllers/ProfileController');

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ message: "Unauthorized access" });
};

// Routes
router.get('/profile', isAuthenticated, ProfileController.getProfile);
router.put('/profile', isAuthenticated, ProfileController.updateProfile);
router.patch('/profile', isAuthenticated, ProfileController.patchProfile);

module.exports = router;
