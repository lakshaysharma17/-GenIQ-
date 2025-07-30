import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getQuizById, submitQuiz } from "../api/quiz-api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { z } from "zod";

// Dynamically create Zod schema after quiz is fetched
const createAnswerSchema = (length: number) =>
  z.object({
    answers: z.array(z.string().min(1, "Select an answer")).length(length),
  });

const AttemptQuiz = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const [answerSchema, setAnswerSchema] = useState<any>(null);

  const form = useForm({
    resolver: answerSchema ? zodResolver(answerSchema) : undefined,
    defaultValues: { answers: [] },
  });

  const { register, handleSubmit, setValue, watch } = form;

  useEffect(() => {
    const fetchQuiz = async () => {
      const res = await getQuizById(id!);
      const q = res.data;
      setQuiz(q);
      setAnswerSchema(createAnswerSchema(q.questions.length));
      form.reset({
        answers: new Array(q.questions.length).fill(""),
      });
    };

    fetchQuiz();
  }, [id]);

  const onSubmit = async (data: any) => {
    const res = await submitQuiz(id!, data.answers);
    setResult(res.data);
  };

  if (!quiz) return <p className="text-center mt-10">Loading quiz...</p>;

  const answers = watch("answers");

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>{quiz.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {quiz.questions.map((q: any, index: number) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <p className="mb-2 font-medium">{`Q${index + 1}: ${q.question}`}</p>
                <RadioGroup
                  value={answers[index]}
                  onValueChange={(val) => {
                    const updated = [...answers];
                    updated[index] = val;
                    setValue("answers", updated, { shouldValidate: true });
                  }}
                >
                  {q.options.map((opt: string, optIdx: number) => (
                    <div key={optIdx} className="flex items-center space-x-2">
                      <RadioGroupItem value={opt} id={`q${index}-opt${optIdx}`} />
                      <Label htmlFor={`q${index}-opt${optIdx}`}>{opt}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            <Button type="submit" className="w-full">
              Submit Quiz
            </Button>

            {result && (
              <div className="mt-6 text-center">
                <p className="font-semibold text-green-600">
                  You scored {result.correct}/{result.total} (
                  {result.scorePercentage.toFixed(2)}%)
                </p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttemptQuiz;