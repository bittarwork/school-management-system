// models/Exam.js
const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Exam", ExamSchema);
