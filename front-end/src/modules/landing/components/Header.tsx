import React from 'react';
import { 
  Brain, 
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

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Brain className="h-8 w-8 text-primary" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            GIQ
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 px-4 space-y-4">
            <a href="#features" className="block text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="block text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <div className="pt-4 space-y-2">
              <Link  to="/login" className="w-full text-left text-sm font-medium hover:text-primary transition-colors">
                Sign In
              </Link>
              <Link to="/register" className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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

export default Header