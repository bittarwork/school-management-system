// models/ExamResult.js
const mongoose = require("mongoose");

const ExamResultSchema = new mongoose.Schema({
  examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ExamResult", ExamResultSchema);
