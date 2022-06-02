const asyncHandler = require("express-async-handler");
const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createNewUser = asyncHandler(async (req, res) => {
  const { name, email, password, address } = req.body;
  if (!name || !email || !password || !address) {
    return res.status(400).send("Please all fields to sign up");
  }
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).send("This email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    address,
    password: hashedPassword,
  });

  if (newUser) {
    return res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      address: newUser.address,
      token: generateWebToken(userExists._id),
    });
  } else {
    return res.status(400).send("Invalid user data");
  }
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Please enter all details to logged in");
  }

  const userExists = await User.findOne({ email });

  if (!userExists) {
    return res.status(400).send("No user exist with this email");
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
    return res.status(400).send("Invalid credentials");
  }
});

const getLoggedInUser = asyncHandler(async (req, res) => {
  return res.status(200).json(req.user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  return res.status(200).json("Update user profile");
});

const updateProfilePicture = asyncHandler(async (req, res) => {
  return res.status(200).json("Update user profile picture");
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
  updateProfilePicture,
};
