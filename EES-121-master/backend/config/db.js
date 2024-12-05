const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = "mongodb+srv://rajivmsurati11:rajivmsurati11@cluster0.p9hso.mongodb.net/EES-121_App"; // Ensure this variable exists in your .env file
    if (!uri) {
        throw new Error("MongoDB URI is not defined in environment variables");
    }
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
