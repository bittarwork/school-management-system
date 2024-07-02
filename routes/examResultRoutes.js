// routes/examResultRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  addExamResult,
  getExamResults,
  getStudentResults,
} = require("../controllers/examResultController");

const router = express.Router();

router.route("/").post(protect, addExamResult);
router.route("/exam/:examId").get(protect, getExamResults);
router.route("/student/:studentId").get(protect, getStudentResults);

module.exports = router;
