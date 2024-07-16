const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoute = require('./Routes/UserRoute');
const AnnouncementRoute = require('./Routes/AnnouncementRoute');
const ProfileRoute = require('./Routes/ProfileRoute');
const LostFoundRoute = require('./Routes/Lost&FoundRoute');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    
    serverSelectionTimeoutMS: 5000,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the process if failed to connect to MongoDB
});

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/user', UserRoute);
app.use('/profile', ProfileRoute);
app.use('/announcement', AnnouncementRoute);
app.use('/lostfound', LostFoundRoute);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
