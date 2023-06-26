import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/routes.js"
import cors from 'cors';
import connectDB from "./config/db.js"
dotenv.config()
connectDB()
const port = process.env.PORT||5000;
const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(userRoute)
app.listen(port,()=>console.log(`server started at ${port}`))
