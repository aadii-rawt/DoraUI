const express = require("express");
const { getUser } = require("../controllers/userControllers");
const router = express.Router()

router.get("/:username", getUser)

module.exports = router