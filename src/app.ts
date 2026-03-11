
import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./database";

(async () => {
   try {
       await connectDB();
       console.log("Connected!");
   } catch (error) {
       console.error(error);
       process.exit(1);
   }
})()

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.json({message: "Api Express + ts OK!"})
})

export default app;
