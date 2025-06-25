const ElementSchema = require("../db/elementSchema");
const UserSchema = require("../db/userSchema");

const createElement = async (req, res) => {
  try {
    const data = req.body;

    const newElement = new ElementSchema(data);

    const saved = await newElement.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create element" });
  }
}

const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId
    console.log(" userid :", userId);
    const components = await ElementSchema.find({ author: userId }).sort({ createdAt: -1 })
      .populate('author', 'username email avatar displayName bio').exec();
    console.log(components);
    res.json(components);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
}

const getPosts = async (req, res) => {
  try {
    const elements = await ElementSchema.find()
      .sort({ createdAt: -1 }) // sort before exec()
      .populate('author', 'username email avatar displayName') // populate user data
      .exec();

    res.status(200).json(elements);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch elements" });
  }
}

const saveFavorites = async (req, res) => {
  const userId = req.user;
  console.log(userId);

  const postId = req.params.id;

  try {
    const user = await UserSchema.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    const alreadySaved = user.favorites.includes(postId);

    if (alreadySaved) {
      user.savedPosts.pull(postId);
    } else {
      user.savedPosts.push(postId);
    }
    await user.save();

    res.status(200).json({ message: alreadySaved ? "Post unsaved" : "Post saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { createElement, getUserPosts, getPosts, saveFavorites }