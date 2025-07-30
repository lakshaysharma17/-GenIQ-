import mongoose from "mongoose";
export const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String
});