import mongoose from "mongoose";
import {QuestionSchema} from "./question-model.js";
const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Quiz title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Quiz description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  questions: {
    type: [QuestionSchema],
    validate: {
      validator: function(val) {
        return Array.isArray(val) && val.length > 0;
      },
      message: "At least one question is required"
    },
    required: [true, 'Questions are required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save middleware to update the updatedAt field
QuizSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  console.log('🔄 Pre-save middleware triggered for quiz:', this.title);
  next();
});

// Post-save middleware for logging
QuizSchema.post('save', function(doc) {
  console.log('✅ Quiz saved successfully with ID:', doc._id);
});

// Error handling middleware
QuizSchema.post('save', function(error, doc, next) {
  if (error.name === 'ValidationError') {
    console.error('❌ Validation Error:', error.message);
  } else if (error.code === 11000) {
    console.error('❌ Duplicate Key Error:', error.message);
  } else {
    console.error('❌ Save Error:', error.message);
  }
  next(error);
});

export const QuizModel = mongoose.model("Quiz", QuizSchema);