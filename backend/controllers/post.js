const Post = require("../models/post");

const registerPost = async (req, res) => {
    if (!req.body.text)
    return res.status(400).send("Incomplete data");

  let post = new Post({
    userId: req.user._id,
    text: req.body.text,
    status: "active",
  });

  let result = await post.save();
  if (!result) return res.status(400).send("Error registing post");
  return res.status(200).send({ result });
};

const listPost = async (req, res) => {
  let post = await Post.find({ userId: req.user._id });
  if (!post || post.length === 0)
    return res.status(400).send("You have no assigned post");
  return res.status(200).send({ post });
};

module.exports = { registerPost, listPost };
