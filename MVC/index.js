const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRoute = require('./Routes/UserRoute');
const AnnouncementRoute = require('./Routes/AnnouncementRoute');
const ProfileRoute = require('./Routes/ProfileRoute');
const LostFoundRoute = require('./Routes/Lost&FoundRoute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Ensure CORS is enabled for all routes

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/user', UserRoute);
app.use('/profile', ProfileRoute);
app.use('/announcement', AnnouncementRoute);
app.use('/lostfound', LostFoundRoute);

// Error Handling Middleware
app.use((err, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
