import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";


dotenv.config({path:"../.env"});
const app = express();
const port = process.env.PORT || 4000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/user",(req,res) => {
    res.send("hello");
})




const server = async () => {
    await connectDb();
    app.listen(port,() => {
        console.log(`server started on port ${3000}`);
    })
};


server();