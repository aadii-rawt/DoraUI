const express = require("express");
const { getUser, getFavoritePosts, updateUser } = require("../controllers/userControllers");
const UserSchema = require("../db/userSchema");
const ElementSchema = require("../db/elementSchema");
const router = express.Router()

router.get("/:username", getUser)
router.put("/update", updateUser)
router.get("/favorites", async (req, res) => {
    const userId = req.user;
    // try {
    //     const user = await UserSchema.findById(userId).select("favorites");
    //     if (!user) return res.status(404).json({ message: "User not found" });
    //     const favoriteIds = user.favorites;
    //     console.log("id", favoriteIds);
        
    //     const favoritePosts = await ElementSchema.find({ _id: { $in: favoriteIds } });
        
    //     res.status(200).json(favoritePosts);
    // } catch (err) {
    //     console.error("Error fetching favorite posts:", err);
    //     res.status(500).json({ message: "Server error" });
    // }
})

module.exports = router