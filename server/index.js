import express from "express";
import mongoose from 'mongoose'
import cors from 'cors'
import { readdirSync } from 'fs';
import dotenv from 'dotenv'
import route from './routes/user.js'
dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})

const app = express();
app.use(express.json());
app.use(cors())

app.use(route)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}..`)
})
