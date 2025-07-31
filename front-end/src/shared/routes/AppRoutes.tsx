import HomePage from "@/modules/landing/pages/HomePage";
import Dashboard from "@/modules/user/pages/Dashboard";
import Login from "@/modules/user/pages/Login";
import NotFound from "@/modules/user/pages/NotFound";
import Register from "@/modules/user/pages/Register";
import QuizForm from "@/modules/quiz/pages/QuizForm";
import QuizList from "@/modules/quiz/pages/QuizList";
import AttemptQuiz from "@/modules/quiz/pages/AttemptQuiz";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import PublicRoute from "@/shared/components/PublicRoute";

import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />
        <Route 
          path="/register" 
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
        
        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quiz/create" 
          element={
            <ProtectedRoute requiredRole="admin">
              <QuizForm />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quiz/list" 
          element={
            <ProtectedRoute>
              <QuizList />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quiz/attempt/:id" 
          element={
            <ProtectedRoute>
              <AttemptQuiz />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quizzes" 
          element={
            <ProtectedRoute>
              <QuizList />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </>
  );
};
export default AppRoutes;
