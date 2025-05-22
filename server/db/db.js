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
  displayName: {
    type: String
  },
  avatar: {
    type: String
  },
  bio: {
    type: String,
    default: ''
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  isAdmin: {
    type: Boolean,
    default: false
  }
});



const ComponentSchema = new mongoose.Schema({
    type : String,
    description : String,
    html : String,
    css : String,
    framework : String,
    bgColor : String,
    // author : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
    createdAt : Number,
    bookmark : {type : Number, default : 0}
})


const User = mongoose.model("Users", UserSchema);
const Components = mongoose.model("Components",ComponentSchema);


module.exports = {User,Components}