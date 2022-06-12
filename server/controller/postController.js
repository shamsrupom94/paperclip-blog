const asyncHandler = require("express-async-handler");
const Post = require("../model/PostModel");
const User = require("../model/UserModel");

const getAllPublicPosts = asyncHandler(async (req, res) => {
  const PAGE = req.query.page ? Number(req.query.page) : 0;
  const DEFAULT_LIMIT = 5;

  const publicPosts = await Post.find({ isPrivate: false })
    .populate("postedBy", "name profilePicture")
    .skip(PAGE * DEFAULT_LIMIT)
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
    postedBy: req.user._id,
  });

  await User.findByIdAndUpdate(req.user._id, {
    totalPosts: req.user.totalPosts + 1,
  });
  return res.status(200).json({ message: "New post created!", newPost });
});

const getSinglePost = asyncHandler(async (req, res) => {
  const singlePost = await Post.findById(req.params.id).populate(
    "postedBy",
    "name profilePicture"
  );

  if (!singlePost) {
    res.status(400).send("No post found");
  }
  return res.status(200).json(singlePost);
});

const getPostByUser = asyncHandler(async (req, res) => {
  const PAGE = req.query.page ? Number(req.query.page) : 0;
  const DEFAULT_LIMIT = 5;

  const allPosts = await Post.find({
    $and: [{ postedBy: req.params.id }, { isPrivate: false }],
  })
    .populate("postedBy", "name profilePicture")
    .skip(PAGE * DEFAULT_LIMIT)
    .limit(DEFAULT_LIMIT);
  
  if(!allPosts) {
    return res.status(400).json({message:"something went wrong!"})
  }

  return res.status(200).json(allPosts);
});

const editPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if(!post) {
    return res.status(400).json({message:"Post not found!"})
  }

  if(!req.user) {
    return res.status(400).json({message:"No user found!"})
  }

  if (post.postedBy.toString() !== req.user._id.toString()) {
    return res.status(400).send("User not authorized")
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
  return res
    .status(200)
    .json({ message: "Post has been updated!", updatedPost });

});

const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if(!post) {
    return res.status(400).json({message:"Post not found!"})
  }

  if(!req.user) {
    return res.status(400).json({message:"No user found!"})
  }

  if (post.postedBy.toString() !== req.user._id.toString()) {
    return res.status(400).send("User not authorized")
  }

  await post.remove();

  return res
    .status(200)
    .json({ message: "Post has been deleted!" });

});

const getStat = asyncHandler(async (req, res) => {
  const totalPosts = await Post.countDocuments({isPrivate: false});
  const totalUsers = await User.countDocuments({})
  
  return res
    .status(200)
    .json({ totalPosts, totalUsers });
});

module.exports = {
  getAllPublicPosts,
  createNewPost,
  getSinglePost,
  getPostByUser,
  editPost,
  deletePost,
  getStat
};
