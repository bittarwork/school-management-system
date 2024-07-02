// controllers/courseController.js
const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const course = new Course({
      title,
      description,
      teacherId: req.user.id,
    });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (course.teacherId.toString() !== req.user.id) {
      return res.status(403).json({ message: "User not authorized" });
    }
    course.title = title || course.title;
    course.description = description || course.description;
    course.updatedAt = Date.now();
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (course.teacherId.toString() !== req.user.id) {
      return res.status(403).json({ message: "User not authorized" });
    }
    await course.remove();
    res.json({ message: "Course removed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
