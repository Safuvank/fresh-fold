import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./modules/auth/auth.route.js";

dotenv.config();

const app = express();

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/v1/auth", authRoutes);

export default app;
