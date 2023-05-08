const Comment = require("../models/comment");

// save activity to database
async function updateComment(req, res, next) {
  await Comment.findOneAndUpdate(
    { id: req.body.id },
    {
      annotator_ano: req.body.name,
      sentiment_ano: req.body.sentiment,
    },
    { upsert: true }
  );

  res.redirect("/");
}

module.exports = updateComment;
