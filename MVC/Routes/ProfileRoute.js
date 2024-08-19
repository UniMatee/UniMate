const router = require('express').Router();
const ProfileController = require('../Controllers/ProfileController');
const {authenticateToken} = require('../Middleware/authMiddleware');

router.get('/profile', authenticateToken, ProfileController.getProfile);
router.put('/profile', authenticateToken, ProfileController.updateProfile);
router.patch('/profile', authenticateToken, ProfileController.patchProfile);

module.exports = router;
