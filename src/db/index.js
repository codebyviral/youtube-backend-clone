import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env",
});

const connectDB = async () => {
  let databaseURI = `${process.env.MONGO_DB_URI}/${DB_NAME}`
  console.log(databaseURI);
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch(error){
        console.log("ERROR connecting to MongoDB ", error);
        process.exit(1)
    }
}

export default connectDB