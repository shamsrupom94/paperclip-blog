const asyncHandler = require("express-async-handler");
const Post = require("../model/PostModel");

const getAllPublicPosts = asyncHandler(async (req, res) => {
  const publicPosts = await Post.find({ isPrivate: false });
  return res.status(200).json(publicPosts);
});

const createNewPost = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res
      .status(400)
      .send("Please add proper title and content for posting");
  }

  const newPost = await Post.create({
    title: req.body.title,
    content: req.body.content,
    categoryString: req.body.category,
    isPrivate: req.body.privacy === "public" ? false : true,
  });

  return res.status(200).json({ message: "New post created!", newPost });
});

const getSinglePost = asyncHandler(async (req, res) => {
  const singlePost = await Post.findById(req.params.id);
  console.log(singlePost)
  if (!singlePost) {
    res.status(400).send("No post found");
  }
  return res.status(200).json(singlePost)
});

module.exports = {
  getAllPublicPosts,
  createNewPost,
  getSinglePost
};
