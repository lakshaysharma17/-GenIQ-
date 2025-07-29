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
import { Link,useNavigate } from "react-router-dom";
import { loginSchema } from "../validations/login-validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doLogin } from "../api/user-api";


  
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
        console.log("Form Submit", userData);
        try {
          const result = await doLogin(userData);
          console.log("Result", result);
    
          if (result.data.message) {
            localStorage.setItem("token", result.data.token);
            localStorage.setItem("role", result.data.role);
            navigate("/dashboard");
          } else {
            console.log('Unable to register...');
    
          }
        } catch (error) {
          console.log(error);
          // setMessage(error);
          console.log("Register Fail", error);
    
        }
      };
  return (
      
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Card className="w-full max-w-md rounded-xl border border-indigo-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center font-bold text-indigo-600">Login Here</CardTitle>
          <CardDescription className="text-center mt-2 text-indigo-600">Welcome back! Get ready to test your music knowledge.</CardDescription>
          <CardDescription className="text-center mt-1 text-indigo-400 italic">QUIZ App Login form</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(loginSubmit)}>
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input {...register("email")}type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input {...register("password")}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          Don't have an account?{" "}
          <span className="ml-1 text-blue-600"><Link to="/register">Register</Link></span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
