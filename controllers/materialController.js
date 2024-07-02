// controllers/materialController.js
const Material = require("../models/Material");

exports.createMaterial = async (req, res) => {
  const { title, courseId, fileUrl } = req.body;
  try {
    const material = new Material({
      title,
      courseId,
      fileUrl,
    });
    await material.save();
    res.status(201).json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await Material.findById(id);
    if (!material) {
      return res.status(404).json({ message: "Material not found" });
    }
    await material.remove();
    res.json({ message: "Material removed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
