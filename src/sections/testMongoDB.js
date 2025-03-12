import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://jhaabhijeet524:108108108abhijeet@cluster0.hw1fp.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
    try {
        console.log("⏳ Connecting to MongoDB...");
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB Connection Successful!");
        process.exit(0);
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
}

testConnection();
