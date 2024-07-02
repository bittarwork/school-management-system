// routes/courseRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const router = express.Router();

router.route("/").post(protect, createCourse).get(getCourses);
router.route("/:id").put(protect, updateCourse).delete(protect, deleteCourse);

module.exports = router;
