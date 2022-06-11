const express = require("express");
const router = express.Router();
const {
  createNewUser,
  userLogin,
  getLoggedInUser,
  updateUserProfile,
  changePassword,
  getUserPublicInfo
} = require("../controller/userController");
const { routeProtection } = require("../config/authMiddleware");

router.post("/create-user", createNewUser);
router.post("/login", userLogin);
router.get("/get-user", routeProtection, getLoggedInUser);
router.put("/profile-update", routeProtection, updateUserProfile);
router.put("/password-change", routeProtection, changePassword);
router.get("/public-info/:id", getUserPublicInfo);



module.exports = router;
 