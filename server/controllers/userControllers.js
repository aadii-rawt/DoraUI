const UserSchema = require("../db/userSchema");

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

module.exports = { getUser }