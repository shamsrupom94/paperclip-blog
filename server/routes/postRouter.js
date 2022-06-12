const express = require('express');
const router = express.Router();
const {
  getAllPublicPosts,
  createNewPost,
  getSinglePost,
  getPostByUser,
  editPost,
  deletePost,
  getStat
} = require("../controller/postController");

const { routeProtection } = require("../config/authMiddleware");

router.get("/all", getAllPublicPosts);
router.get("/single/:id", getSinglePost);
router.get("/by-user/:id", getPostByUser);
router.post("/create", routeProtection, createNewPost);
router.put("/edit/:id", routeProtection, editPost);
router.delete("/delete/:id", routeProtection, deletePost);
router.get("/statistics", getStat);

module.exports = router;