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
  annotator_alb: {
    type: String,
    required: false,
  },
  annotator_ano: {
    type: String,
    required: false,
  },
  annotator_suz: {
    type: String,
    required: false,
  },
  sentiment_alb: {
    type: String,
    required: false,
  },
  sentiment_ano: {
    type: String,
    required: false,
  },
  sentiment_suz: {
    type: String,
    required: false,
  },
});

const Comment = mongoose.model("annotations", annotation);
module.exports = Comment;
