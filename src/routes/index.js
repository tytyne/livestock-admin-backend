import express from "express";
import dotenv from "dotenv";
import api from "./api/index";

dotenv.config();

const router = express.Router();
const apiVersion = process.env.API_VERSION;
const baseUrl = `/${apiVersion}`;

router.get("/api", (req, res) => {
  res.status(200).json({ message: "Well Connected api" });
});

router.use(baseUrl, api);


export default router;