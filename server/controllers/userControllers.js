const UserSchema = require("../db/userSchema");
const ElementSchema = require("../db/elementSchema");

const getUser = async (req, res) => {
    try {
        console.log(req.params.username);
        const user = await UserSchema.find({ username: req.params.username })
        res.json(user?.[0]);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const updateUser =  async (req, res) => {
  try {
    const userId = req.user
    if (!userId) return res.status(401).json({ message: 'Unauthorized' })

    const updated = await UserSchema.findByIdAndUpdate(userId, {
      $set: {
        displayName: req.body.displayName,
        location: req.body.location,
        company: req.body.company,
        twitter: req.body.twitter,
        website: req.body.website,
        bio: req.body.bio
      }
    }, { new: true })

    console.log("update : ", updated);
    
    res.json(updated)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

const getFavoritePosts = async (req, res) => {
    const userId = req.user;
    try {
        const user = await UserSchema.findById(userId).select("favorites");
        if (!user) return res.status(404).json({ message: "User not found" });
        const favoriteIds = user.favorites;
        console.log("id", favoriteIds);
        
        const favoritePosts = await ElementSchema.find({ _id: { $in: favoriteIds } });
        
        res.status(200).json(favoritePosts);
    } catch (err) {
        console.error("Error fetching favorite posts:", err);
        res.status(500).json({ message: "Server error" });
    }
};


module.exports = { getUser,getFavoritePosts ,updateUser}