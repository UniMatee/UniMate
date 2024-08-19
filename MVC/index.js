const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const API_URL = 'http://192.168.1.2:8080'; 


const app = express();
const port = process.env.PORT || 8080;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(API_URL));


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
const UserRoute = require('./Routes/UserRoute');
const AnnouncementRoute = require('./Routes/AnnouncementRoute');
const ProfileRoute = require('./Routes/ProfileRoute');

app.use('/user', UserRoute);
app.use('/profile', ProfileRoute);
app.use('/announcement', AnnouncementRoute);


// Error Handling Middleware
app.use((err, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
