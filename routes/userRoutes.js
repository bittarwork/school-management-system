// routes/userRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/authController");

const router = express.Router();

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
