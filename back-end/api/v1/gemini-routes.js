import express from "express";
import { generateQuiz } from "../../controllers/gemini-controller.js";
const router = express.Router();
router.post('/generate',generateQuiz)//for admin

export default router;