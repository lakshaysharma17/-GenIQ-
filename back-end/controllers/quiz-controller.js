import { createQuiz, getAllQuizzes, getQuizById, submitQuiz } from '../services/quiz-service.js';

export const create = async (req, res) => {
  try {
    const quizData = req.body;
    
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ 
        success: false,
        message: 'Request body is empty',
        received: req.body
      });
    }
    
    const quiz = await createQuiz(quizData);
    
    res.status(201).json({
      success: true,
      message: 'Quiz created successfully',
      quiz: quiz
    });
  } catch (error) {
    console.error("Quiz creation failed:", error.message);
    
    let statusCode = 500;
    if (error.message.includes('validation') || error.message.includes('required') || error.message.includes('Validation failed')) {
      statusCode = 400;
    } else if (error.message.includes('Database not connected')) {
      statusCode = 503;
    }
    
    res.status(statusCode).json({ 
      success: false,
      message: 'Failed to create quiz',
      error: error.message
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const quizzes = await getAllQuizzes();
    
    res.status(200).json({
      success: true,
      count: quizzes.length,
      quizzes: quizzes
    });
  } catch (error) {
    console.error("Error fetching quizzes:", error.message);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch quizzes',
      error: error.message
    });
  }
};

export const getById = async (req, res) => {
  try {
    const quizId = req.params.id;
    
    if (!quizId) {
      return res.status(400).json({
        success: false,
        message: 'Quiz ID parameter is required'
      });
    }
    
    const quiz = await getQuizById(quizId);
    
    res.status(200).json({
      success: true,
      quiz: quiz
    });
  } catch (error) {
    console.error(`Error fetching quiz ${req.params.id}:`, error.message);
    
    let statusCode = 500;
    if (error.message.includes('Invalid quiz ID format')) {
      statusCode = 400;
    } else if (error.message.includes('Quiz not found')) {
      statusCode = 404;
    } else if (error.message.includes('Database not connected')) {
      statusCode = 503;
    }
    
    res.status(statusCode).json({ 
      success: false,
      message: 'Failed to fetch quiz',
      error: error.message
    });
  }
};

export const submit = async (req, res) => {
  try {
    const quizId = req.params.id;
    const userAnswers = req.body.answers;
    
    if (!quizId) {
      return res.status(400).json({
        success: false,
        message: 'Quiz ID parameter is required'
      });
    }
    
    if (!userAnswers) {
      return res.status(400).json({
        success: false,
        message: 'Answers are required in request body'
      });
    }
    
    const result = await submitQuiz(quizId, userAnswers);
    
    res.status(200).json({
      success: true,
      message: 'Quiz submitted successfully',
      result: result
    });
  } catch (error) {
    console.error(`Error submitting quiz ${req.params.id}:`, error.message);
    
    let statusCode = 500;
    if (error.message.includes('Quiz not found')) {
      statusCode = 404;
    } else if (error.message.includes('Invalid quiz ID format')) {
      statusCode = 400;
    } else if (error.message.includes('answers')) {
      statusCode = 400;
    }
    
    res.status(statusCode).json({ 
      success: false,
      message: 'Failed to submit quiz',
      error: error.message
    });
  }
};