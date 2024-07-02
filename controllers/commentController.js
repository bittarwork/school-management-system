// controllers/commentController.js
const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const { courseId, commentText } = req.body;
  try {
    const comment = new Comment({
      courseId,
      userId: req.user.id,
      commentText,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ courseId: req.params.courseId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
