// routes/examRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createExam,
  getExams,
  deleteExam,
} = require("../controllers/examController");

const router = express.Router();

router.route("/").post(protect, createExam);
router.route("/:courseId").get(protect, getExams);
router.route("/:id").delete(protect, deleteExam);

module.exports = router;
