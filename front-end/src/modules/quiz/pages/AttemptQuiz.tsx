import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getQuizById, submitQuiz } from "../api/quiz-api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { z } from "zod";
import { toast } from "sonner";
import Header from "@/shared/components/Header";

const createAnswerSchema = (length: number) =>
  z.object({
    answers: z.array(z.string().min(1, "Select an answer")).length(length),
  });

const AttemptQuiz = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const [answerSchema, setAnswerSchema] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const QUIZ_TIME_MINUTES = 10;

  const form = useForm({
    resolver: answerSchema ? zodResolver(answerSchema) : undefined,
    defaultValues: { answers: [] },
  });

  const { register, handleSubmit, setValue, watch } = form;

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await getQuizById(id!);
        const q = res.data?.quiz || res.data;
        
        if (!q) {
          throw new Error("No quiz data received");
        }
        
        setQuiz(q);
        setAnswerSchema(createAnswerSchema(q.questions.length));
        form.reset({
          answers: new Array(q.questions.length).fill(""),
        });
        setTimeLeft(QUIZ_TIME_MINUTES * 60);
      } catch (error) {
        console.error("Failed to fetch quiz:", error);
        setError("Failed to load quiz");
        toast.error("Failed to load quiz");
        navigate("/dashboard");
      }
    };

    fetchQuiz();
  }, [id]);

  useEffect(() => {
    if (timeLeft <= 0 || !quiz) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, quiz]);

  const answers = watch("answers");
  const answeredCount = answers.filter((answer: string) => answer && answer.trim() !== "").length;
  const progress = quiz ? (answeredCount / quiz.questions.length) * 100 : 0;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAutoSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    toast.info("Time's up! Submitting quiz automatically...");
    
    try {
      const res = await submitQuiz(id!, answers);
      const resultData = res.data?.result || res.data;
      setResult(resultData);
      toast.success("Quiz submitted successfully!");
    } catch (error) {
      console.error("Auto-submit failed:", error);
      toast.error("Failed to submit quiz");
      setError("Failed to submit quiz");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: any) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const res = await submitQuiz(id!, data.answers);
      const resultData = res.data?.result || res.data;
      setResult(resultData);
      toast.success("Quiz submitted successfully!");
    } catch (error) {
      console.error("Quiz submission failed:", error);
      toast.error("Failed to submit quiz");
      setError("Failed to submit quiz");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto border border-gray-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <Button onClick={() => navigate("/dashboard")}>
                Back to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading quiz...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto border border-gray-200 shadow-sm">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">{quiz.title}</CardTitle>
              <div className="text-right">
                <div className={`text-lg font-bold ${timeLeft <= 60 ? 'text-red-600' : 'text-gray-700'}`}>
                  {formatTime(timeLeft)}
                </div>
                <div className="text-sm text-gray-500">
                  {answeredCount}/{quiz.questions.length} answered
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardHeader>
          
          <CardContent>
            {!result ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {quiz.questions.map((q: any, index: number) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-lg font-medium">
                        Question {index + 1} of {quiz.questions.length}
                      </p>
                      <span className="text-sm text-gray-500">
                        {answers[index] ? "✓ Answered" : "○ Unanswered"}
                      </span>
                    </div>
                    
                    <p className="mb-4 text-gray-800">{q.question}</p>
                    
                    <RadioGroup
                      value={answers[index]}
                      onValueChange={(val) => {
                        const updated = [...answers];
                        updated[index] = val;
                        setValue("answers", updated, { shouldValidate: true });
                      }}
                    >
                      {q.options.map((opt: string, optIdx: number) => (
                        <div key={optIdx} className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50">
                          <RadioGroupItem value={opt} id={`q${index}-opt${optIdx}`} />
                          <Label htmlFor={`q${index}-opt${optIdx}`} className="text-base cursor-pointer">
                            {opt}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-6 border-t">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => navigate("/dashboard")}
                  >
                    Cancel Quiz
                  </Button>
                  
                  <div className="flex gap-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={handleAutoSubmit}
                      disabled={isSubmitting}
                    >
                      Submit Now
                    </Button>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || answeredCount === 0}
                      className="min-w-[120px] bg-blue-600 hover:bg-blue-700"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Quiz"}
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg">
                  <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
                  <p className="text-xl">
                    You scored {result.correct}/{result.total} (
                    {result.scorePercentage.toFixed(1)}%)
                  </p>
                </div>

                {result.results && result.results.length > 0 && (
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4">Detailed Results</h3>
                    <div className="space-y-4">
                      {result.results.map((item: any, index: number) => (
                        <div key={index} className="border-l-4 pl-4 py-2">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="font-medium">Question {index + 1}</p>
                              <p className="text-sm text-gray-600">{item.question}</p>
                            </div>
                            <div className={`px-3 py-1 rounded text-sm font-medium ${
                              item.isCorrect 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {item.isCorrect ? 'Correct' : 'Incorrect'}
                            </div>
                          </div>
                          {!item.isCorrect && (
                            <div className="mt-2 text-sm">
                              <p className="text-gray-600">
                                Your answer: <span className="font-medium">{item.userAnswer}</span>
                              </p>
                              <p className="text-green-600">
                                Correct answer: <span className="font-medium">{item.correctAnswer}</span>
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-4">
                  <Button onClick={() => navigate("/dashboard")} className="bg-blue-600 hover:bg-blue-700">
                    Back to Dashboard
                  </Button>
                  <Button variant="outline" onClick={() => window.location.reload()}>
                    Take Quiz Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AttemptQuiz;