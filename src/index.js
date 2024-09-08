import dotenv from "dotenv";
import connectDatabase from "./db/db.js";

dotenv.config({
    path: './env'
});

connectDatabase();


///This is database connection initialization using IIFE which is a function that is declared and invoked at the same time
// ;(async () =>{
//     try {
//         const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         // console.log(connection);
//         // console.log(`\nConnection result: ${connection.connection.host}`);
//     } catch (error) {
//         console.error("MONGO Error: ",error);
//         throw error
//     }
// })()