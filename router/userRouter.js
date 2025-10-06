import { handleCity } from "../controller/weatherController";
import express from "express";
const router = express.Router();

router.post("/cities", handleCity);

export default router;