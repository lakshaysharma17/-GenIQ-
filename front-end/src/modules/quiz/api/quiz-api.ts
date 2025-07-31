import axios from 'axios';

const QUIZ_API = import.meta.env.VITE_API_QUIZ_BASE_URL?.replace(/[%#]$/, '') || 'http://localhost:5500/api/v1/quiz';

export const createQuiz = (quizData: unknown) => {
  console.log("Quiz API URL:", QUIZ_API);
  console.log("Full create URL:", `${QUIZ_API}/create`);
  console.log("Request data:", quizData);
  
  return axios.post(`${QUIZ_API}/create`, quizData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });
};

export const getAllQuizzes = () => {
  return axios.get(`${QUIZ_API}/all`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });
};

export const getQuizById = (quizId: string) => {
  return axios.get(`${QUIZ_API}/attempt/${quizId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });
};

export const submitQuiz = (quizId: string, answers: string[]) => {
  return axios.post(`${QUIZ_API}/submit/${quizId}`, { answers }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });
};