const mongoose = require("mongoose")

const user = new mongoose.Schema({
  provider: {
    type: String,
    enum: ['google', 'github', 'twitter'],
    required: true
  },
  providerId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Elements" }],
  displayName: String,
  avatar: String,
  bio: String,
  website: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  company: String,
  githubAccount: String,
  twitter: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const UserSchema = mongoose.model("Users", user)

module.exports = UserSchema