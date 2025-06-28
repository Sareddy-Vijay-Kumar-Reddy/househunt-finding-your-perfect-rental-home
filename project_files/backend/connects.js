const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    throw new Error(`❌ Could not connect to MongoDB: ${err}`);
  }
};

module.exports = connectDB;

