const asyncHandler = require("express-async-handler");
const Post = require("../model/PostModel");

const getAllPublicPosts = asyncHandler(async (req, res) => {
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const DEFAULT_LIMIT = 5;

  const publicPosts = await Post.find({ isPrivate: false })
    .skip(skip)
    .limit(DEFAULT_LIMIT);

  if (!publicPosts) {
    return res.status(400).json({ message: "Something went wrong" });
  }
  
  return res.status(200).json(publicPosts);
});

const createNewPost = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res
      .status(400)
      .send("Please add proper title and content for posting");
  } else if (!req.user) {
    return res.status(400).send("No user found !");
  }

  const newPost = await Post.create({
    title: req.body.title,
    content: req.body.content,
    categoryString: req.body.category,
    isPrivate: req.body.privacy === "public" ? false : true,
    user: req.user._id,
  });

  return res.status(200).json({ message: "New post created!", newPost });
});

const getSinglePost = asyncHandler(async (req, res) => {
  const singlePost = await Post.findById(req.params.id);
  console.log(singlePost);
  if (!singlePost) {
    res.status(400).send("No post found");
  }
  return res.status(200).json(singlePost);
});

module.exports = {
  getAllPublicPosts,
  createNewPost,
  getSinglePost,
};
