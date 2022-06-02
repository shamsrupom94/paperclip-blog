const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let PostSchema = new Schema({
  postedAt: { type: Date, default: Date.now },
  lastUpdatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  title: { type: String },
  content: { type: String },
  isPrivate: { type: Boolean, default: false },
  categoryString: {type: String},
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: 'User',
  },
});

// Export the model
module.exports = mongoose.model("Post", PostSchema);
