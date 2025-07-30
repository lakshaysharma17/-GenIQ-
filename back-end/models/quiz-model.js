import mongoose from "mongoose";
import { QuestionSchema } from "./question-model.js";

const QuizSchema = new mongoose.Schema({
    title: String,
    description: String,
    questions: [QuestionSchema]
  });
  
export const QuizModel = mongoose.model('Quiz', QuizSchema);