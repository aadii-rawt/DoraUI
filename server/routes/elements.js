const express = require("express");
const { Components } = require("../db/db");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, type, framework, html, css, preview, bgColor, createdAt } = req.body;

    const newComponent = new Components({
      type,
      framework,
      html,
      css,
      bgColor,
      createdAt,
      author: req.user?._id || null // optional: set user if logged in
    });

    const saved = await newComponent.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create component" });
  }
});

module.exports = router;
