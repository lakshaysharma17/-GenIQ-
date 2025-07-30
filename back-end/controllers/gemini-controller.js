import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export const generateQuiz = async (req, res) => {
  try {
    // logic to call Gemini API and return quiz
    res.status(200).json({ message: "AI quiz generated" });
  } catch (error) {
    console.error("Gemini error", error);
    res.status(500).json({ message: "Failed to generate quiz" });
  }
};