const mongoose = require("mongoose");

const annotation = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  subreddit: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  annotator: {
    type: String,
    required: true,
  },
  sentiment: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("annotations", annotation);
module.exports = Comment;
