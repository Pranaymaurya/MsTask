import mongoose from "mongoose";

const usershema=new mongoose.Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true
    },
    Phoneno:{
        type:Number
    },
    Company:{
        type:String
    },
    Address:{
        type:String
    },
    Website:{
        type:String
    }
})

const Applicants=mongoose.model("Applicants",usershema)

export default Applicants;