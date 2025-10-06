import express from "express";
import userRouter from "./router/userRouter.js"; // ✅ match your folder/file

const app = express();
app.use(express.json());

// use routes
app.use("/api", userRouter);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
