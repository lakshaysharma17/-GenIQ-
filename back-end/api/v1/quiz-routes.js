import express from "express";
import { create, getAll, getById, submit } from "../../controllers/quiz-controller.js";
import { auth } from "../../utils/middlewares/auth.js";

const router = express.Router();

router.get('/all', getAll); // fetch quiz on dashboard
router.get('/attempt/:id', getById);
router.post('/submit/:id', submit); // Submit answers
router.post('/create', auth, create); // for admin - now protected

export default router;