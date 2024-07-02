// models/Material.js
const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  fileUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Material", MaterialSchema);
