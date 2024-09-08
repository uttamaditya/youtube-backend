import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(connectionInstance);
        console.log(`Connection status!!!!: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("DB Connection Error Message: ",error);
        process.exit(1);
    }
}

export default connectDatabase

