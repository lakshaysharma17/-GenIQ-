import HomePage from "@/modules/landing/pages/HomePage";
import Dashboard from "@/modules/user/pages/Dashboard";
import Login from "@/modules/user/pages/Login";
import NotFound from "@/modules/user/pages/NotFound";
import Register from "@/modules/user/pages/Register";
import QuizForm from "@/modules/quiz/pages/QuizForm";
import QuizList from "@/modules/quiz/pages/QuizList";
import AttemptQuiz from "@/modules/quiz/pages/AttemptQuiz";

import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/quiz/create" element={<QuizForm />} />
        <Route path="/quiz/list" element={<QuizList />} />
        <Route path="/quiz/attempt/:id" element={<AttemptQuiz />} />
      </Routes>
    </>
  );
};
export default AppRoutes;
