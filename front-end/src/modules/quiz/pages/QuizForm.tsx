import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quizSchema } from "@/modules/quiz/validations/quiz-validation";
import type { QuizSchema } from "@/modules/quiz/validations/quiz-validation";
import { createQuiz } from "@/modules/quiz/api/quiz-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/shared/components/Header";

const QuizForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuizSchema>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: "",
      description: "",
      questions: [
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (data: QuizSchema) => {
    try {
      console.log("Submitting quiz data:", data);
      console.log("Number of questions:", data.questions.length);
      console.log("Questions:", data.questions);
      
      const res = await createQuiz(data);
      console.log("Quiz creation response:", res);
      
      if (res && res.data) {
        console.log("Quiz saved successfully:", res.data);
        toast.success("Quiz Created Successfully!");
        reset();
      } else {
        console.error("Server did not respond with data:", res);
        toast.error("Server did not respond with data.");
      }
    } catch (err: any) {
      console.error("Quiz creation failed:", err);
      console.error("Error response:", err?.response);
      console.error("Error message:", err?.message);
      toast.error("Failed to create quiz.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Quiz</h1>
          <p className="text-gray-600 mt-2">Build engaging quizzes for your audience</p>
        </div>
        
        <Card className="w-full max-w-4xl mx-auto border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-blue-700 text-xl font-bold">
              Quiz Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label>Title</Label>
                <Input {...register("title")} placeholder="Quiz title" />
                {errors.title && (
                  <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                )}
              </div>

              <div>
                <Label>Description</Label>
                <Input {...register("description")} placeholder="Short description" />
                {errors.description && (
                  <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
                )}
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="border p-4 rounded-lg shadow-sm bg-white">
                  <Label>{`Question ${index + 1}`}</Label>
                  <Input
                    {...register(`questions.${index}.question`)}
                    placeholder="Enter question"
                    className="mb-2"
                  />
                  {errors.questions?.[index]?.question && (
                    <p className="text-sm text-red-500">
                      {errors.questions[index]?.question?.message}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-2 mb-2">
                    {Array(4)
                      .fill(0)
                      .map((_, optIdx) => (
                        <Input
                          key={optIdx}
                          {...register(`questions.${index}.options.${optIdx}`)}
                          placeholder={`Option ${optIdx + 1}`}
                        />
                      ))}
                  </div>

                  <Input
                    {...register(`questions.${index}.correctAnswer`)}
                    placeholder="Correct answer"
                  />
                  {errors.questions?.[index]?.correctAnswer && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.questions[index]?.correctAnswer?.message}
                    </p>
                  )}

                  <Button
                    variant="destructive"
                    type="button"
                    className="mt-3"
                    onClick={() => remove(index)}
                  >
                    Remove Question
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  append({
                    question: "",
                    options: ["", "", "", ""],
                    correctAnswer: "",
                  })
                }
              >
                + Add Question
              </Button>

              <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                ADD Quiz
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuizForm;