const express = require("express");
const { getUserPosts, createElement, getPosts } = require("../controllers/elementController");
const router = express.Router();

router.get("/", getPosts);
router.get("/:userId", getUserPosts)
router.post("/create", createElement);

router.post("/:id/favourite", )

module.exports = router;
