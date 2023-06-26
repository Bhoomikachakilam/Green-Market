import express from "express"
import { welcome,register, login } from "../controllers/Auth.js"
import { addCrop,getCropsByFarmer,getCrops } from "../controllers/Crops.js"
import { authenticateUser, authorizeFarmer } from "../middleware/authenticate.js"
const router = express.Router()
router.get("/",welcome)
router.post("/addcrop",authenticateUser,authorizeFarmer,addCrop)
router.get("/getcropsbyFarmer", authenticateUser, getCropsByFarmer)
router.get("/getCrops",authenticateUser,getCrops)
router.post("/register",register)
router.post("/login", login)
export default router
