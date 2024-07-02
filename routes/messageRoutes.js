// routes/messageRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  sendMessage,
  getMessages,
} = require("../controllers/messageController");

const router = express.Router();

router.route("/").post(protect, sendMessage).get(protect, getMessages);

module.exports = router;
