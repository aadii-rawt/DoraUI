const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
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

const ElementSchema = new mongoose.Schema({
  type: String,
  backgroundColor : String,
  isTailwind : Boolean,
  source : String,
  status : String,
  title : String,
  description: String,
  html: String,
  css: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  bookmark: { type: Number, default: 0 },
  createdAt : Number,
})

const User = mongoose.model("Users", UserSchema);
const Elements = mongoose.model("Elements", ElementSchema);

module.exports = { User, Elements }