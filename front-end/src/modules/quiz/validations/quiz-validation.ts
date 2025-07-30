import { z } from "zod";

export const quizSchema = z.object({
  title: z.string().min(1, "Quiz title is required"),
  description: z.string().optional(),
  questions: z.array(z.object({
    question: z.string().min(1, "Question is required"),
    options: z.array(z.string()).length(4, "Exactly 4 options required"),
    correctAnswer: z.string().min(1, "Correct answer is required")
  })).min(1, "At least one question is required")
});

export type QuizSchema = z.infer<typeof quizSchema>;