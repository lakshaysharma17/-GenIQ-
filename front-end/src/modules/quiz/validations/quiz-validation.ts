import { z } from "zod";

export const quizSchema = z.object({
  title: z.string()
    .min(3, "Quiz title must be at least 3 characters long")
    .max(100, "Quiz title cannot exceed 100 characters"),
  description: z.string()
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description cannot exceed 500 characters"),
  questions: z.array(z.object({
    question: z.string()
      .min(5, "Question must be at least 5 characters long"),
    options: z.array(z.string().min(1, "Option cannot be empty"))
      .length(4, "Exactly 4 options required")
      .refine((options) => options.every(option => option.trim().length > 0), {
        message: "All options must be non-empty"
      }),
    correctAnswer: z.string()
      .min(1, "Correct answer is required")
  })).min(1, "At least one question is required")
  .refine((questions) => {
    return questions.every(q => q.options.includes(q.correctAnswer));
  }, {
    message: "Correct answer must be one of the provided options"
  })
});

export type QuizSchema = z.infer<typeof quizSchema>;