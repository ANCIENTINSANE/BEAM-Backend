const mongoose = require("mongoose");

async function dbConnect() {
    const uri = process.env.MONGO_URI; // Load MONGO_URI from .env
    if (!uri) {
        console.error("MONGO_URI is not defined in .env file");
        process.exit(1);
    }
    try {
        await mongoose.connect(uri); // No need for deprecated options
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
}

module.exports = dbConnect;
