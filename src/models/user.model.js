import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ["user","admin"],
        default: "user",
    },
    isverified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
    resetPasswordToken:{
        type: String,
    },
    resetPasswordExpiry: Date,

},{timestamps: true});


const User = mongoose.model("User",userSchema);

export default User;