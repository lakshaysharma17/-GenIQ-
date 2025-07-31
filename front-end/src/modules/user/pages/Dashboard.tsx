import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2, Plus, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizList from "@/modules/quiz/pages/QuizList";
import Header from "@/shared/components/Header";
import { getUserRole, clearAuth } from "@/shared/utils/auth";

const Dashboard = () => {
  const [role, setRole] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = getUserRole();
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    clearAuth();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Ready to test your knowledge?</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200">
              <User className="w-4 h-4" />
              <span className="capitalize font-medium">{role}</span>
            </div>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-center text-gray-900 text-2xl font-bold">
                  Welcome to Your Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-lg text-gray-700">
                  Ready to test your knowledge?
                </p>

                <div className="flex justify-center">
                  <BarChart2 className="w-10 h-10 text-blue-600" />
                </div>

                <p className="text-sm text-gray-500 italic">
                  Choose a quiz from the list and start your journey!
                </p>

                {role === "admin" && (
                  <div className="pt-4">
                    <Button onClick={() => navigate("/quiz/create")} className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Quiz
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quiz List for Users */}
            {role === "user" && (
              <div className="mt-8">
                <QuizList />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Quizzes Taken</span>
                  <span className="font-semibold text-blue-600">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Score</span>
                  <span className="font-semibold text-green-600">-</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Time</span>
                  <span className="font-semibold text-purple-600">0 min</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={() => navigate("/quiz/list")} 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  Browse Quizzes
                </Button>
                {role === "admin" && (
                  <Button 
                    onClick={() => navigate("/quiz/create")} 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    Create New Quiz
                  </Button>
                )}
                <Button 
                  onClick={handleLogout} 
                  variant="outline" 
                  className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;