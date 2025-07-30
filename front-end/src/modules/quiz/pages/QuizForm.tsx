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
      const res = await createQuiz(data);
      toast.success("Quiz Created Successfully!");
      reset();
    } catch (err) {
      console.error("Quiz creation failed:", err);
      toast.error("Failed to create quiz.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 flex justify-center">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-indigo-700 text-xl font-bold">
            Create New Quiz
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
              <div key={field.id} className="border p-4 rounded shadow-sm bg-white">
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

            <Button type="submit" className="w-full mt-4">
              Submit Quiz
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizForm;