const mongoose = require ("mongoose");

const dbConfig = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected...");
        })

        connection.on('error', () => {
            console.log("MongoDB connection failed...");
            process.exit();
        })
    } catch {
        console.log("Error while connecting to database");
        process.exit();
    }
};
