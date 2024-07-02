// controllers/examController.js
const Exam = require("../models/Exam");

exports.createExam = async (req, res) => {
  const { title, courseId } = req.body;
  try {
    const exam = new Exam({
      title,
      courseId,
    });
    await exam.save();
    res.status(201).json(exam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find({ courseId: req.params.courseId });
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteExam = async (req, res) => {
  const { id } = req.params;
  try {
    const exam = await Exam.findById(id);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }
    await exam.remove();
    res.json({ message: "Exam removed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
