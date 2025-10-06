import express from "express";
import { handleCity } from "../controller/weatherController.js";

const router = express.Router();

// POST /api/city — fetch weather without saving users
router.post("/city", handleCity);

export default router;
