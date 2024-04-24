import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import routeRoute from './routes/route.js';
import addproductRoute from './routes/addproduct.js';
import cookieParser from 'cookie-parser';


const app= express();
dotenv.config();
const port=process.env.PORT

app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
    origin:'https://fit-essentials-hub.onrender.com',
    credentials: true
}))
app.use("/api/route", routeRoute);
app.use("/api/addproduct", addproductRoute);


app.use((obj, req, res, next)=>{
    const statusCode = obj.status || 500;
    const message = obj.message || "something Went wrong";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a===obj.status)? true: false,
        status: statusCode,
        message: message,
        obj: obj.data
    });
});


const connectMongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database...")
    } catch (error) {
        throw error;
    }
}

app.listen(port, () => {
    connectMongoDB();
    console.log("Connected to backend!");
})