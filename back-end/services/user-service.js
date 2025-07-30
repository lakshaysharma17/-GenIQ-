import { UserModel } from '../models/user-model.js';
import { compareHash, encryptPassword } from '../utils/services/password-hash.js';
export const register = async (userObject) => {
    try {
        // Check if user already exists
        const existingUser = await UserModel.findOne({ email: userObject.email });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Encrypt password
        userObject.password = encryptPassword(userObject.password);

        // Create new user
        const newUser = new UserModel(userObject);

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
        const isPasswordValid = compareHash(password, user.password);
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