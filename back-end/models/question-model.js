import mongoose from "mongoose";

export const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'Question text is required'],
    trim: true,
    minlength: [5, 'Question must be at least 5 characters long']
  },
  options: {
    type: [String],
    validate: {
      validator: function(val) {
        return Array.isArray(val) && val.length === 4 && val.every(option => option && option.trim().length > 0);
      },
      message: "Exactly 4 non-empty options are required"
    },
    required: [true, 'Options are required']
  },
  correctAnswer: {
    type: String,
    required: [true, 'Correct answer is required'],
    validate: {
      validator: function(val) {
        return this.options && this.options.includes(val);
      },
      message: 'Correct answer must be one of the provided options'
    }
  }
});