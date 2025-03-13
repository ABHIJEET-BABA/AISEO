import mongoose from "mongoose";

const connection = { isConnected: false };

export async function connect() {
    if (connection.isConnected) {
        console.log("✅ Using existing MongoDB connection");
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("❌ MONGODB_URI is missing from environment variables.");
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "yourDatabaseName", // ✅ Ensure this matches your actual database name
        });

        connection.isConnected = db.connections[0].readyState;
        console.log("✅ New MongoDB connection established");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

export async function disconnect() {
    if (connection.isConnected && process.env.NODE_ENV === "production") {
        await mongoose.disconnect();
        connection.isConnected = false;
        console.log("✅ Disconnected from MongoDB (Production)");
    }
}

export default { connect, disconnect };

