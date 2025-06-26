const UserSchema = require("../db/userSchema");
const ElementSchema = require("../db/elementSchema");

const getUser = async (req, res) => {
    try {
        console.log(req.params.username);
        const user = await UserSchema.find({ username: req.params.username })
        console.log(user);
        res.json(user?.[0]);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}


const getFavoritePosts = async (req, res) => {
    const userId = req.user;
    try {
        const user = await UserSchema.findById(userId).select("favorites");
        if (!user) return res.status(404).json({ message: "User not found" });
        const favoriteIds = user.favorites;
        const favoritePosts = await ElementSchema.find({ _id: { $in: favoriteIds } });
        console.log("f", favoritePosts);
        
        res.status(200).json(favoritePosts);
    } catch (err) {
        console.error("Error fetching favorite posts:", err);
        res.status(500).json({ message: "Server error" });
    }
};


module.exports = { getUser,getFavoritePosts }