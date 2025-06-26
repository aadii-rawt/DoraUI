const express = require("express");
const { getUserPosts, createElement, getPosts, handleFavorite } = require("../controllers/elementController");
const authMiddleware = require("../middleware/middleware");
const router = express.Router();

router.get("/", getPosts);
router.get("/:userId", getUserPosts)
router.post("/create", createElement);
router.post("/:id/favorite", authMiddleware, handleFavorite )

module.exports = router;
