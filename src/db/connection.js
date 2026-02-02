require('dotenv').config(); // Ensure .env is loaded for MONGODB_URI
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      console.error('MONGODB_URI is not defined in environment variables.');
      process.exit(1);
    }
    
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};
module.exports = connectDB;