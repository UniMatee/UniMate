const Announcement = require('../Models/AnnouncementModel');
const fs = require('fs');
const path = require('path');

// Helper function to save uploaded files
const saveFile = (file) => {
    const uploadDir = path.join(__dirname, '..', 'uploads'); // Create 'uploads' directory if not exist
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }

    const photoName = `${Date.now()}_${file.originalname}`;
    const filePath = path.join(uploadDir, photoName);

    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, file.buffer, (err) => {
            if (err) reject(err);
            resolve(filePath);
        });
    });
};

exports.createAnnouncement = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Only admin users can create announcements" });
        }

        const { message } = req.body;
        let photo = '';

        if (req.file) {
            // Save uploaded file
            const filePath = await saveFile(req.file);
            photo = filePath;
        }

        const newAnnouncement = new Announcement({
            photo,
            message,
            createdBy: req.user._id
        });

        await newAnnouncement.save();

        res.status(201).json({ message: "Announcement created successfully", announcement: newAnnouncement });
    } catch (error) {
        res.status(500).json({ message: "Unable to create announcement", error: error.message });
    }
};

exports.getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find().populate('createdBy', 'username');
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ message: "Unable to retrieve announcements", error: error.message });
    }
};
