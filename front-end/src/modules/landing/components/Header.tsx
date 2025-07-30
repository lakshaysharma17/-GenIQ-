import React from 'react';
import { 
  Edit3, 
  Trophy, 
  Users, 
  Zap, 
  Check, 
  Star, 
  ArrowRight,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Crown,
  Target,
  BookOpen
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <span className="text-2xl font-bold text-blue-600">
            QuizMaster
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Features
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Sign In
          </Link>
          <Link to="/register" className="inline-flex items-center justify-center rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 h-10 px-6 py-2 shadow-md">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="container py-4 px-4 space-y-4">
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
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;