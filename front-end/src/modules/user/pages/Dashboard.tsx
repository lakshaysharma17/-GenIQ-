import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [role, setRole] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <Card className="w-full max-w-2xl border border-indigo-300 shadow-lg rounded-xl">
        <CardHeader>
          <CardTitle className="text-center text-indigo-700 text-2xl font-bold">
            Welcome to Your Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg text-gray-700">
            Ready to test your knowledge?
          </p>

          <div className="flex justify-center">
            <BarChart2 className="w-10 h-10 text-indigo-500" />
          </div>

          <p className="text-sm text-gray-500 italic">
            Choose a quiz from the list and start your journey!
          </p>

          {role === "admin" && (
            <div className="pt-4">
              <Button onClick={() => navigate("/quiz/create")} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Create Quiz
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;