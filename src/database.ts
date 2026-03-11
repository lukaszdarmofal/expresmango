import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI as string;
console.log("MongoDB URI: " + mongoURI);

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(mongoURI);

    } catch (e) {
        if(e instanceof Error) {
            console.error(e.message);
        } else {
            console.error("co?");
        }
        process.exit(1);
    }
}

export default connectDB;