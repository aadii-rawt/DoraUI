const express = require("express");
const { User } = require("../db/db");
const router = express.Router()

router.get("/:username", async (req, res) => {
    try {
        console.log(req.params.username);

        const user = await User.find({ username: req.params.username })
        console.log(user);
        res.json(user?.[0]);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
})

module.exports = router