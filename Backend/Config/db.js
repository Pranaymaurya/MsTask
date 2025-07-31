import mongoose from "mongoose";

const connectdb=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://admin:admin@cluster0.rdvin0r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("connected to database")

    }
    catch(error){
        console.log("error connecting")
    }

}

export default connectdb