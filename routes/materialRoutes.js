// routes/materialRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createMaterial,
  getMaterials,
  deleteMaterial,
} = require("../controllers/materialController");

const router = express.Router();

router.route("/").post(protect, createMaterial).get(getMaterials);
router.route("/:id").delete(protect, deleteMaterial);

module.exports = router;
