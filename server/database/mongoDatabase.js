// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose"; 

 
 const DBConnection=async()=>{
    const MONGODB_URI=`${process.env.MONGO_CONNECTION_URL}`
    
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
        console.log("Succcesfully Connected to MongoDB");
    } catch (error) {
        console.log("Not Connected to MongoDB", error.message);
    }
}
 
export default DBConnection; 