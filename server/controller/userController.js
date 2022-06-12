const asyncHandler = require("express-async-handler");
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createNewUser = asyncHandler(async (req, res) => {
  const { name, email, password, address } = req.body;
  if (!name || !email || !password || !address) {
    return res.status(400).json({ message: "Please all fields to sign up" });
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "This email already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    address,
    password: hashedPassword,
    totalPosts: 0
  });

  if (newUser) {
    return res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      address: newUser.address,
      token: generateWebToken(newUser.id)
      
    });
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Please enter all details to logged in" });
  }

  const userExists = await User.findOne({ email });

  if (!userExists) {
    return res.status(400).json({ message: "No user exist with this email" });
  }

  const passwordMatches = await bcrypt.compare(password, userExists.password);

  if (userExists && passwordMatches) {
    res.status(201).json({
      _id: userExists.id,
      name: userExists.name,
      email: userExists.email,
      address: userExists.address,
      token: generateWebToken(userExists._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
});

const getLoggedInUser = asyncHandler(async (req, res) => {
  return res.status(200).json(req.user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const userExists = await User.findById(req.user._id);

  if (!userExists) {
    return res.status(400).json({ message: "No user found!" });
  }

  const updatedUser = await User.findByIdAndUpdate(userExists._id, req.body);

  if (!updatedUser) {
    return res.status(400).json({ message: "Something went wrong!!" });
  }

  return res.status(200).json({ message: "User Update!", updatedUser });
});

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const userExists = await User.findById(req.user._id);

  if (!userExists) {
    return res.status(400).json({ message: "No user found!" });
  }

  const passwordMatches = await bcrypt.compare(
    oldPassword,
    userExists.password
  );

  if (!passwordMatches) {
    return res.status(400).json({ message: "Password doesn't match!" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  const updatedUser = await User.findByIdAndUpdate(req.user._id, {
    password: hashedPassword,
  });

  return res.status(200).json({ message: "Password changed!" });
});

const getUserPublicInfo = asyncHandler(async (req, res) => {
  const foundUser = await User.findById(req.params.id).select(
    "-password -lastUpdatedAt -deleted -isAdmin"
  );

  if (!foundUser) {
    return res.status(400).json({ message: "No user found" });
  }

  return res.status(200).json(foundUser);
});

const generateWebToken = (id) => {
  return jwt.sign({ id }, "shams123", {
    expiresIn: "7d",
  });
};

module.exports = {
  createNewUser,
  userLogin,
  getLoggedInUser,
  updateUserProfile,
  changePassword,
  getUserPublicInfo,
};
