const { Int32 } = require("mongodb");
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
  top_weighted_topic: {
    type: Number,
    required: false,
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

const Comment = mongoose.model("stressfactors", annotation);
module.exports = Comment;
