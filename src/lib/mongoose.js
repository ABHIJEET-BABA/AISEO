import mongoose from "mongoose";

const connection = { isConnected: 0 };

async function connect() {
    if (connection.isConnected) {
        console.log("✅ Using existing MongoDB connection");
        return;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("❌ MONGODB_URI is not defined in .env file");
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        connection.isConnected = db.connections[0].readyState;
        console.log("✅ New MongoDB connection established");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

async function disconnect() {
    if (connection.isConnected && process.env.NODE_ENV === "production") {
        await mongoose.disconnect();
        connection.isConnected = 0;
        console.log("✅ Disconnected from MongoDB (Production)");
    } else {
        console.log("⚠️ Skipping disconnect in development mode");
    }
}

const db = { connect, disconnect };
export default db;
