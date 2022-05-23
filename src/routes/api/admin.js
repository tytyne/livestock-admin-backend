import express from "express"
import adminController from "../../controllers/adminContoller"
const router = express.Router()


router.get("/all",adminController.getAdmins)

export default router;