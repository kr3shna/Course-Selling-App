import User from "../models/user.model.js";
import crypto from "crypto";



export const registerUser = async (req,res) => {
    try{
        const {name, email, password} = req.body;
        if(!(name && email && password)){
            return res.staus(401).json({
                msg: "All fields are required"
            })
        }

        const existingUser = await User.findOne({email: email});
        if(existingUser){
            return res.stauts(400).json({
                msg: "User already exists"
            })
        }
        
        const user = await User.create({
            name,
            email,
            password,
        });

        if(!user){
            return res.status(401).json({
                msg: "User not registered"
            })
        }

        const token = crypto.randomBytes(32).toString("hex");

        user.verificationToken = token;
            console.log(token);
        await user.save();

        res.status(200).json({
            msg: "You are successfully register"
        });

    }
    catch(err){
        return res.status(400).json({
            msg: "User not registered!!"
        })
    };
};