const router = require('express').Router();
const multer = require('multer');
const AnnouncementController = require('../Controllers/AnnouncementController');

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'admin') {
        return next();
    }
    res.status(403).json({ message: "Unauthorized access" });
};

// Routes
router.post('/create', isAdmin, upload.single('photo'), AnnouncementController.createAnnouncement);
router.get('/ann', AnnouncementController.getAllAnnouncements);

module.exports = router;
