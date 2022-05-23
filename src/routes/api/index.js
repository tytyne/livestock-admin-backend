import express from "express";
import Admin from "./admin";


const router = express.Router();


router.use("/admin",Admin)

export default router;