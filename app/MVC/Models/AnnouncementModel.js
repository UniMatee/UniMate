const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
    photo: {
        type: String, 
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Announcement', AnnouncementSchema);
