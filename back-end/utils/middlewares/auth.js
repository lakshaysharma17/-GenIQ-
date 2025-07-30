import { verifyToken } from "../services/token.js";

export const auth = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("Token", token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  try {
    const decoded = verifyToken(token); // e.g. { email, role }
    req.user = decoded; // attach decoded info to request
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};