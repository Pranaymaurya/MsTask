import express from 'express'
import cors from "cors"
import connectdb from './Config/db.js'
import { Adduser, getuser } from './Routes/Userroutes.js'
import dotenv from "dotenv";

dotenv.config();
const app=express()
app.use(express.json())

app.use(cors())

connectdb()
app.post('/api/user',Adduser)

app.get("/api/user",getuser)
app.listen(process.env.PORT,()=>{
    console.log("server running")
})