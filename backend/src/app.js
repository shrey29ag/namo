import express from "express";
import {createServer} from "node:http";   
import mongoose from "mongoose";
import cors from "cors";
import {connectToSocket} from "./controllers/socketManager.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 5000);
const allowedOrigins = [
  "https://namo-self.vercel.app",
  process.env.CLIENT_URL
].filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"] 
  }));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true}));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    const connectionDB = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to MongoDB: ${connectionDB.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Server is running on port 5000");
    })
}

start();