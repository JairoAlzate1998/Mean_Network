const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: String,
  status: String,
  userId: { type: mongoose.Schema.ObjectId, ref: "user" },
});

const post = mongoose.model("post", postSchema);
module.exports = post;
