import { QuizModel } from '../models/quiz-model.js';
import mongoose from 'mongoose';

// Create a new quiz
export const createQuiz = async (quizData) => {
  try {
    console.log("Service: Starting quiz creation");
    console.log("Service: Quiz data received:", quizData);
    console.log("Service: Number of questions:", quizData?.questions?.length || 0);
    
    if (mongoose.connection.readyState !== 1) {
      throw new Error(`Database not connected. Connection state: ${mongoose.connection.readyState}`);
    }

    if (!quizData) {
      throw new Error('Quiz data is required');
    }

    if (!quizData.title || typeof quizData.title !== 'string') {
      throw new Error('Valid quiz title is required');
    }

    if (!quizData.description || typeof quizData.description !== 'string') {
      throw new Error('Valid quiz description is required');
    }

    if (!quizData.questions || !Array.isArray(quizData.questions) || quizData.questions.length === 0) {
      throw new Error('At least one question is required');
    }

    console.log("Service: Validating questions...");
    // Validate each question
    quizData.questions.forEach((question, index) => {
      console.log(`Service: Validating question ${index + 1}:`, question);
      
      if (!question.question || typeof question.question !== 'string') {
        throw new Error(`Question ${index + 1}: Question text is required`);
      }
      
      if (!question.options || !Array.isArray(question.options) || question.options.length !== 4) {
        throw new Error(`Question ${index + 1}: Exactly 4 options are required`);
      }
      
      if (question.options.some(option => !option || typeof option !== 'string' || option.trim().length === 0)) {
        throw new Error(`Question ${index + 1}: All options must be non-empty strings`);
      }
      
      if (!question.correctAnswer || typeof question.correctAnswer !== 'string') {
        throw new Error(`Question ${index + 1}: Correct answer is required`);
      }
      
      if (!question.options.includes(question.correctAnswer)) {
        throw new Error(`Question ${index + 1}: Correct answer must be one of the provided options`);
      }
    });

    console.log("Service: Creating quiz model...");
    // Create new quiz instance
    const quiz = new QuizModel(quizData);
    
    console.log("Service: Validating model...");
    // Validate the model before saving
    const validationError = quiz.validateSync();
    if (validationError) {
      const errorMessages = Object.values(validationError.errors).map(err => err.message);
      throw new Error(`Validation failed: ${errorMessages.join(', ')}`);
    }

    console.log("Service: Saving to database...");
    // Save to database
    const saved = await quiz.save();
    console.log("Service: Quiz saved successfully:", saved);
    console.log("Service: Saved quiz questions count:", saved.questions?.length || 0);
    
    return saved;
  } catch (err) {
    console.error("Error in createQuiz service:", err.message);
    throw err;
  }
};

// Get all quizzes
export const getAllQuizzes = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      throw new Error(`Database not connected. Connection state: ${mongoose.connection.readyState}`);
    }
    
    const quizzes = await QuizModel.find({}).sort({ createdAt: -1 });
    return quizzes;
  } catch (err) {
    console.error("Error fetching quizzes:", err.message);
    throw err;
  }
};

// Get quiz by ID
export const getQuizById = async (quizId) => {
  try {
    if (!quizId) {
      throw new Error('Quiz ID is required');
    }
    
    if (!mongoose.Types.ObjectId.isValid(quizId)) {
      throw new Error('Invalid quiz ID format');
    }
    
    if (mongoose.connection.readyState !== 1) {
      throw new Error(`Database not connected. Connection state: ${mongoose.connection.readyState}`);
    }
    
    const quiz = await QuizModel.findById(quizId);
    
    if (!quiz) {
      throw new Error('Quiz not found');
    }
    
    return quiz;
  } catch (err) {
    console.error("Error fetching quiz by ID:", err.message);
    throw err;
  }
};

// Submit quiz and calculate score
export const submitQuiz = async (quizId, userAnswers) => {
  try {
    if (!userAnswers || !Array.isArray(userAnswers)) {
      throw new Error('User answers must be provided as an array');
    }
    
    const quiz = await getQuizById(quizId);
    
    if (userAnswers.length !== quiz.questions.length) {
      throw new Error(`Expected ${quiz.questions.length} answers, but received ${userAnswers.length}`);
    }
    
    let score = 0;
    const results = [];

    quiz.questions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      const isCorrect = question.correctAnswer === userAnswer;
      
      if (isCorrect) {
        score++;
      }
      
      results.push({
        questionIndex: index,
        question: question.question,
        userAnswer: userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect
      });
    });

    const scorePercentage = Math.round((score / quiz.questions.length) * 100);

    return {
      total: quiz.questions.length,
      correct: score,
      scorePercentage: scorePercentage,
      results: results
    };
  } catch (err) {
    console.error("Error submitting quiz:", err.message);
    throw err;
  }
};