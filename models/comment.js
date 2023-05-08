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
    required: false,
  },
  annotator_researcher: {
    type: String,
    required: false,
  },
  stressfactor: {
    type: String,
    required: false,
  },
  stressfactor_researcher: {
    type: String,
    required: false,
  },
});

const Comment = mongoose.model("abcs", annotation);
module.exports = Comment;
