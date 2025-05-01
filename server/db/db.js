const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    name : String,
    email : {type: String, require : true, unique : true},
    avatar : String,

    googleId : String,
    githubId: String,
    twitterId : String,

    bio : String,
},{timestamps  : true})


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