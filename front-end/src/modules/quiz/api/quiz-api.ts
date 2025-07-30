import axios from 'axios';

export const createQuiz = (quizData: unknown) => {
  return axios.post("/api/v1/quiz/create", quizData);
};

export const getAllQuizzes = () => {
  axios.defaults.headers['Authorization'] = localStorage.token;
  return axios.get("/api/v1/quiz/all");
};

export const getQuizById = (quizId: string) => {
  return axios.get(`/api/v1/quiz/attempt/${quizId}`);
};

export const submitQuiz = (quizId: string, answers: string[]) => {
  return axios.post(`/api/v1/quiz/submit/${quizId}`, { answers });
};