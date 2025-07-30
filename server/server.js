import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/connectDB.js";

import userRouter from "./routes/userRoutes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // Update this when deploying frontend
  credentials: true
}));

app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/user", userRouter);

app.get("/api/test", (req, res) => {
  res.json({ message: "CORS is working ✅" });
});

// ✅ Add this root route
app.get("/", (req, res) => {
  res.send("🚀 Car Rental Backend is running.");
});

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});
