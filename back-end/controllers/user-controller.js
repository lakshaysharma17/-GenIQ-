import {register as registerUser} from '../services/user-service.js';
import {login as loginUser} from '../services/user-service.js';
import { generateToken } from '../utils/services/token.js';

export const login = async (req, res) => {
    console.log("Login request body:", req.body);
    
    try {
        const userObject = req.body;
        
        // Validate required fields
        if (!userObject.email || !userObject.password) {
            return res.status(400).json({
                message: 'Email and password are required'
            });
        }

        // Attempt to login user
        const user = await loginUser(userObject);
        
        if (!user) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        // Generate JWT token
        const token = generateToken({ 
            id: user._id,
            email: user.email, 
            role: user.role 
        });

        console.log("Login successful for user:", user.email);
        console.log("Generated token:", token);

        res.status(200).json({
            message: 'Login successful',
            token: token,
            role: user.role,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        
        // Handle specific errors
        if (error.message === 'Invalid credentials') {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }
        
        res.status(500).json({
            message: 'Internal server error during login'
        });
    }
};

export const register = async (req, res) => {
    console.log('Register request body:', req.body);
    
    try {
        const userObject = req.body;
        
        // Validate required fields
        if (!userObject.name || !userObject.email || !userObject.password) {
            return res.status(400).json({
                message: 'Name, email and password are required'
            });
        }

        // Attempt to register user
        const result = await registerUser(userObject);
        
        console.log("Registration successful for:", userObject.email);
        
        res.status(201).json({
            message: result || 'User registered successfully'
        });

    } catch (error) {
        console.error("Registration error:", error);
        
        // Handle specific errors
        if (error.code === 11000) {
            return res.status(409).json({
                message: 'Email already exists'
            });
        }
        
        if (error.message.includes('validation')) {
            return res.status(400).json({
                message: 'Invalid user data provided'
            });
        }
        
        res.status(500).json({
            message: 'Internal server error during registration'
        });
    }
};

export const profile = async (req, res) => {
    try {
        // req.user should be populated by auth middleware
        if (!req.user) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        res.status(200).json({
            message: 'Profile retrieved successfully',
            user: req.user
        });

    } catch (error) {
        console.error("Profile error:", error);
        res.status(500).json({
            message: 'Error retrieving profile'
        });
    }
};