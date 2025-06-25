const { default: mongoose } = require("mongoose")

const element = new mongoose.Schema({
  type: String,
  backgroundColor: String,
  isTailwind: Boolean,
  source: String,
  status: String,
  title: String,
  description: String,
  html: String,
  css: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  bookmark: { type: Number, default: 0 },
  createdAt: Number,
})

const ElementSchema = mongoose.model("Elements", element)


module.exports = ElementSchema