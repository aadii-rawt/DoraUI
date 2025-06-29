const express = require("express");
const { getUserPosts, createElement, getPosts, getFAvorite, handleFavorite } = require("../controllers/elementController");
const authMiddleware = require("../middleware/middleware");
const router = express.Router();

router.get("/", getPosts);
router.get("/:userId", getUserPosts)
router.post("/create", createElement);
router.post("/favorite", authMiddleware, getFAvorite )
router.post("/:id/favorite", authMiddleware, handleFavorite )

module.exports = router;
