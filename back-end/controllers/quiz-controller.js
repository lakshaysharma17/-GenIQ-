import { createQuiz, getAllQuizzes, getQuizById, submitQuiz } from '../services/quiz-service.js';

export const create = async (req, res) => {
    try {
        const quizData = req.body;
        const quiz = await createQuiz(quizData);
        res.status(201).json(quiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create quiz' });
    }
};

export const getAll = async (req, res) => {
    try {
        const quizzes = await getAllQuizzes();
        res.status(200).json(quizzes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch quizzes' });
    }
};

export const getById = async (req, res) => {
    try {
        const quizId = req.params.id;
        const quiz = await getQuizById(quizId);
        res.status(200).json(quiz);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch quiz' });
    }
};

export const submit = async (req, res) => {
    try {
        const quizId = req.params.id;
        const userAnswers = req.body.answers;
        const result = await submitQuiz(quizId, userAnswers);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to submit quiz' });
    }
};