const express = require("express");
const { Elements } = require("../db/db");
const mongoose = require("mongoose")
const router = express.Router();

router.get("/:userId", async (req, res) => {
  try {
    console.log(req.params.userId);
    
    const userId = mongoose.Types.ObjectId(req.params.userId)
    console.log(" userid :", userId);
    
    const components = await Elements.find({ author: userId }).sort({ createdAt: -1 });
    console.log(components);
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
})


router.post("/create", async (req, res) => {
  try {
    const { name, type, framework, html, css, preview, bgColor, createdAt, author } = req.body;

    const newElement = new Elements({
      type,
      framework,
      html,
      css,
      bgColor,
      createdAt,
      author
    });

    const saved = await newElement.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create element" });
  }
});


module.exports = router;
