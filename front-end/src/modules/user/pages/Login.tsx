import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/login-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doLogin } from "../api/user-api";
import { toast } from "sonner"; // ✅ import toast

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginSubmit = async (userData: unknown) => {
    try {
      const result = await doLogin(userData);
      console.log("Login result", result);

      if (result.data?.token) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("role", result.data.role);

        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error(result.data?.message || "Login failed. Try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Card className="w-full max-w-md rounded-xl border border-indigo-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center font-bold text-indigo-600">Login Here</CardTitle>
          <CardDescription className="text-center mt-2 text-indigo-600">
            Welcome back! Get ready to test your knowledge.
          </CardDescription>
          <CardDescription className="text-center mt-1 text-indigo-400 italic">
            QUIZ App Login form
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(loginSubmit)}>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Enter your email"
              />
              <span className="text-sm text-red-500">{errors.email?.message}</span>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <span className="text-sm text-red-500">{errors.password?.message}</span>
            </div>
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          Don't have an account?
          <span className="ml-1 text-blue-600">
            <Link to="/register">Register</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;