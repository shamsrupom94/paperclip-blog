const express = require('express');
const router = express.Router();
const {
  getAllPublicPosts,
  createNewPost,
  getSinglePost
} = require("../controller/postController");

const { routeProtection } = require("../config/authMiddleware");

router.get("/all", getAllPublicPosts);
router.get("/:id", getSinglePost);
router.post("/create", routeProtection, createNewPost);

module.exports = router;