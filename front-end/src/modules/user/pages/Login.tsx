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
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const loginSubmit = async (userData) => {
    setIsLoading(true);
    setError("");
    
    try {
      console.log("Submitting login data:", userData);
      const result = await doLogin(userData);
      console.log("Login result:", result);

      // Check if login was successful
      if (result.data && result.data.token) {
        // Store token and role in localStorage
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("role", result.data.role);
        
        console.log("Token stored:", result.data.token);
        console.log("Role stored:", result.data.role);
        
        // Navigate to dashboard
        navigate("/dashboard");
      } else {
        // Handle login failure
        setError(result.data?.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        setError(error.response.data?.message || "Invalid credentials");
      } else if (error.request) {
        // Network error
        setError("Network error. Please check your connection.");
      } else {
        // Other errors
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
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
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <form className="space-y-4" onSubmit={handleSubmit(loginSubmit)}>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Enter your email"
                disabled={isLoading}
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
                disabled={isLoading}
              />
              <span className="text-sm text-red-500">{errors.password?.message}</span>
            </div>
            <Button type="submit" className="w-full mt-4" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
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