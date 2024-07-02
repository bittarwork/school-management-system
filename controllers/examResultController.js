// controllers/examResultController.js
const ExamResult = require("../models/ExamResult");

exports.addExamResult = async (req, res) => {
  const { examId, studentId, score } = req.body;
  try {
    const examResult = new ExamResult({
      examId,
      studentId,
      score,
    });
    await examResult.save();
    res.status(201).json(examResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExamResults = async (req, res) => {
  try {
    const examResults = await ExamResult.find({ examId: req.params.examId });
    res.json(examResults);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentResults = async (req, res) => {
  try {
    const examResults = await ExamResult.find({
      studentId: req.params.studentId,
    });
    res.json(examResults);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
