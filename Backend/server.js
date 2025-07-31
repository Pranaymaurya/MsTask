import express from 'express'
import cors from "cors"
import connectdb from './Config/db.js'
import { Adduser, getuser } from './Routes/Userroutes.js'

const app=express()
app.use(express.json())

app.use(cors())

connectdb()
app.post('/api/user',Adduser)

app.get("/api/user",getuser)
app.listen(5000,()=>{
    console.log("server running")
})