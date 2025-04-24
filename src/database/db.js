import mongoose from "mongoose";


const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    }
    catch(err){
        console.log("failed to connecte Database",err);
        process.exit(1);
    }
};


export default connectDb;