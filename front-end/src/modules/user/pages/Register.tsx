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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validations/register-validation";
import { Link, useNavigate } from "react-router-dom";
import { doRegister } from "../api/user-api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Angry } from "lucide-react";
import { useState } from "react";

const Register = () => {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: "user",
    },
  });

  const registerSubmit = async (userData: unknown) => {
    console.log("Form Submit", userData);
    try {
      const result = await doRegister(userData);
      console.log("Result", result);
      if (result.data.success || result.status === 201) {
        navigate("/login");
      } else {
        setStatus(true);
        setMessage(result.data.message || "Registration failed");
      }
    } catch (err: any) {
      setStatus(true);
      setMessage(err.response?.data?.message || "Registration failed");
      console.log("Register Fail", err);
    }
  };

  const alertJSX = (
    <Alert variant="destructive">
      <AlertTitle></AlertTitle>
      <AlertDescription>
        <Angry className="inline mr-2" />
        {message}
      </AlertDescription>
    </Alert>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <Card className="w-full max-w-md rounded-xl border border-indigo-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-indigo-600">
            Register Here
          </CardTitle>
          <CardDescription className="text-center mt-2 text-indigo-600">
            Join the ultimate quiz challenge!
          </CardDescription>
        </CardHeader>

        <CardContent>
          {status && alertJSX}

          <form className="space-y-4" onSubmit={handleSubmit(registerSubmit)}>
            <input type="hidden" value="user" {...register("role")} />

            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Enter your email"
              />
              <span className="text-red-400">{errors.email?.message}</span>
            </div>

            <div className="grid gap-1">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <span className="text-red-400">{errors.password?.message}</span>
            </div>

            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Enter your name"
              />
              <span className="text-red-400">{errors.name?.message}</span>
            </div>

            <Button type="submit" className="w-full mt-4">
              Register
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-sm text-gray-500">
          Already have an account?{" "}
          <span className="ml-1 text-blue-600">
            <Link to="/login">Login</Link>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;