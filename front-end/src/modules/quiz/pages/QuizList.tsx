import { useEffect, useState } from "react";
import { getAllQuizzes } from "../api/quiz-api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Quiz = {
  _id: string;
  title: string;
  description?: string;
};

const QuizList = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await getAllQuizzes();
        setQuizzes(res.data);
      } catch (err) {
        console.error("Failed to fetch quizzes:", err);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Available Quizzes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz._id} className="border border-indigo-200 shadow">
            <CardHeader>
              <CardTitle className="text-indigo-600">{quiz.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">{quiz.description || "No description"}</p>
              <Button onClick={() => navigate(`/quiz/attempt/${quiz._id}`)}>
                Attempt Quiz
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizList;