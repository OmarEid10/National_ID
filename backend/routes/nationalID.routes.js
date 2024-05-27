import express from "express";
const router = express.Router();
import {IDAnalayse} from "../controllers/nationalID.controllers.js";

router.post("/national", IDAnalayse);

export default router;