import { UserModel } from '../models/user-model.js';
import bcrypt from 'bcryptjs';

export const register = async (userObject) => {
    try {
        const { name, email, password, role = 'user' } = userObject;

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            role
        });

        // Save user to database
        const savedUser = await newUser.save();
        console.log("User registered successfully:", savedUser.email);

        return 'User registered successfully';

    } catch (error) {
        console.error("Registration service error:", error);
        throw error;
    }
};

export const login = async (userObject) => {
    try {
        const { email, password } = userObject;

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('Invalid credentials');
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        console.log("User login successful:", user.email);

        // Return user without password
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        };

    } catch (error) {
        console.error("Login service error:", error);
        throw error;
    }
};

export const getUserById = async (userId) => {
    try {
        const user = await UserModel.findById(userId).select('-password');
        return user;
    } catch (error) {
        console.error("Get user by ID error:", error);
        throw error;
    }
};