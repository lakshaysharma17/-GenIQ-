import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Edit3, LogOut, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    
    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserRole(null);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Edit3 className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <Link to="/" className="text-2xl font-bold text-blue-600">
            QuizMaster
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Dashboard
              </Link>
              {userRole === 'admin' && (
                <Link to="/quiz/create" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Create Quiz
                </Link>
              )}
              <Link to="/quiz/list" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Quizzes
              </Link>
            </>
          ) : (
            <>
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Features
              </a>
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Contact
              </a>
            </>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <User className="w-4 h-4" />
                <span className="capitalize">{userRole}</span>
              </div>
              <Button 
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Sign In
              </Link>
              <Link to="/register" className="inline-flex items-center justify-center rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 h-10 px-6 py-2 shadow-md">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="container py-4 px-4 space-y-4">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Dashboard
                </Link>
                {userRole === 'admin' && (
                  <Link to="/quiz/create" className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    Create Quiz
                  </Link>
                )}
                <Link to="/quiz/list" className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Quizzes
                </Link>
                <div className="pt-4 space-y-3 border-t">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <User className="w-4 h-4" />
                    <span className="capitalize">{userRole}</span>
                  </div>
                  <Button 
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <a href="#features" className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Features
                </a>
                <a href="#about" className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  About
                </a>
                <a href="#contact" className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Contact
                </a>
                <div className="pt-4 space-y-3 border-t">
                  <Link to="/login" className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    Sign In
                  </Link>
                  <Link to="/register" className="inline-flex items-center justify-center rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 w-full h-10 px-6 py-2 shadow-md">
                    Get Started
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
