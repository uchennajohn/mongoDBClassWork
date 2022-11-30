import express from "express";
import logger from 'morgan';
import todoRouter from "./routes/todoRoute"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log("Database connected successfully")
})



const app = express()
app.use(express.json())
app.use(logger('dev'))
app.use('/todo', todoRouter)

const Port =5000;

app.listen(Port, ()=>{
    console.log(`app running at  http://localhost:${Port}`)
})