import {QuizModel} from '../models/quiz-model.js';

// Create a new quiz
export const createQuiz = async (quizData) => {
  const quiz = new QuizModel(quizData);
  return await quiz.save();
};

// Get all quizzes
export const getAllQuizzes = async () => {
  return await QuizModel.find({});
};

// Get quiz by ID
export const getQuizById = async (quizId) => {
  return await QuizModel.findById(quizId);
};

// Submit quiz and calculate score
export const submitQuiz = async (quizId, userAnswers) => {
  const quiz = await QuizModel.findById(quizId);
  if (!quiz) throw new Error("Quiz not found");

  let score = 0;

  quiz.questions.forEach((q, index) => {
    if (q.correctAnswer === userAnswers[index]) {
      score++;
    }
  });

  return {
    total: quiz.questions.length,
    correct: score,
    scorePercentage: (score / quiz.questions.length) * 100,
  };
};