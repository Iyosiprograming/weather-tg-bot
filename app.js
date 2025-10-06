import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cityRoutes from "./routes/cityRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// register routes
app.use("/api", cityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
