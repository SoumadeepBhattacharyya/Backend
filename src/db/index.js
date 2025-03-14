import mongoose from "mongoose";



const connectDB = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);

        console.log(`\n MongoDB connected!! DB_HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
};


export default connectDB