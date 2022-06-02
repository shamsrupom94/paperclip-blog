const express = require("express");
const router = express.Router();
const {
  createNewUser,
  userLogin,
  getLoggedInUser,
  updateUserProfile,
  updateProfilePicture,
} = require("../controller/userController");
const { routeProtection } = require("../config/authMiddleware");

router.post("/create-user", createNewUser);
router.get("/get-user", routeProtection, getLoggedInUser);
router.post("/login", userLogin);
router.post("/profile-update", updateUserProfile);
router.post("/profile-picture-update", updateProfilePicture);


module.exports = router;
 