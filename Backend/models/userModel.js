import mongoose from "mongoose";
const userModel =new mongoose.Schema({
    fullName:{
        type:String,
        required:true //mtb jab bhi data ko bhjoge na toh fullname chaiye database ko agar empty de diya to error show karega.
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true
    }
},{timestamps:true});
export const User = mongoose.model("User", userModel);