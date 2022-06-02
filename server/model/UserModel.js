const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let UserSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  lastUpdatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  isAdmin: { type: Boolean, default: false },
  address: { type: String },
  bio: { type: String },
  profilePicture: { type: String },
  totalPosts: { type: Number },
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
