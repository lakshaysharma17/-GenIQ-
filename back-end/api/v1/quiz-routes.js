import express from "express";
import { create, getAll, getById, submit } from "../../controllers/quiz-controller.js";

const router = express.Router();

router.get('/all', getAll); // fetch quiz on dashboard
router.get('/attempt/:id', getById);
router.post('/submit/:id', submit); // Submit answers
router.post('/create', create); // for admin

export default router;