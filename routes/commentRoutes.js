// routes/commentRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { addComment, getComments } = require("../controllers/commentController");

const router = express.Router();

router.route("/").post(protect, addComment);
router.route("/:courseId").get(getComments);

module.exports = router;
