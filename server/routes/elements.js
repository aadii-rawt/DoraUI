const express = require("express");
const { Elements } = require("../db/db");
const mongoose = require("mongoose")
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const elements = await Elements.find()
      .sort({ createdAt: -1 }) // sort before exec()
      .populate('author', 'username email avatar displayName') // populate user data
      .exec();

    res.status(200).json(elements);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch elements" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId
    console.log(" userid :", userId);
    const components = await Elements.find({ author: userId }).sort({ createdAt: -1 })
    .populate('author', 'username email avatar displayName bio').exec();
    console.log(components);
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
})

router.post("/create", async (req, res) => {
  try {
    const data = req.body;

    const newElement = new Elements(data);

    const saved = await newElement.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create element" });
  }
});


module.exports = router;
