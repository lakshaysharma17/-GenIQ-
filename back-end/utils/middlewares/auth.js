import { verifyToken } from '../services/token.js';
import { getUserById } from '../../services/user-service.js';

export const auth = async (req, res, next) => {
    try {
        // Get token from header
        const authHeader = req.headers.authorization;
        
        if (!authHeader) {
            return res.status(401).json({
                message: 'Access denied. No token provided.'
            });
        }

        // Extract token (format: "Bearer <token>")
        const token = authHeader.startsWith('Bearer ') 
            ? authHeader.slice(7) 
            : authHeader;

        if (!token) {
            return res.status(401).json({
                message: 'Access denied. Invalid token format.'
            });
        }

        // Verify token
        const decoded = verifyToken(token);
        
        if (!decoded) {
            return res.status(401).json({
                message: 'Access denied. Invalid token.'
            });
        }

        // Get user details (optional - for profile endpoint)
        const user = await getUserById(decoded.id);
        
        if (!user) {
            return res.status(401).json({
                message: 'Access denied. User not found.'
            });
        }

        // Attach user info to request
        req.user = {
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
            name: user.name
        };

        next();

    } catch (error) {
        console.error("Auth middleware error:", error);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                message: 'Access denied. Invalid token.'
            });
        }
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Access denied. Token expired.'
            });
        }

        res.status(500).json({
            message: 'Internal server error during authentication.'
        });
    }
};