const express = require('express');
const router = express.Router();
const {
  getAllPublicPosts,
  createNewPost,
  getSinglePost
} = require("../controller/postController");

router.get("/all", getAllPublicPosts);
router.get("/:id", getSinglePost);
router.post("/create", createNewPost);

module.exports = router;