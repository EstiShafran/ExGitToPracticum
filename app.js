 import express from "express";
import userRouter from "./routes/user.js"
import { config } from "dotenv";

config();
const app = express();
app.use(express.json());
app.use("/api/user", userRouter);
let port = process.env.PORT || 3500;
app.listen(port, () => { console.log(`app is listenning on port ${port}`) })