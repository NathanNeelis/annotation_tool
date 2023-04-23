const Comment = require("../models/comment");

// save activity to database
async function updateComment(req, res, next) {
  await Comment.findOneAndUpdate(
    { id: req.body.id },
    {
      annotator_alb: req.body.name,
      sentiment_alb: req.body.sentiment,
    },
    { upsert: true }
  );

  res.redirect("/");
}

module.exports = updateComment;
