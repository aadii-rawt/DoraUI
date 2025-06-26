const express = require("express");
const { getUser, getFavoritePosts } = require("../controllers/userControllers");
const router = express.Router()

router.get("/:username", getUser)
router.get("/favorites", getFavoritePosts)

module.exports = router