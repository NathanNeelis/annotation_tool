const Comment = require("../models/comment");

// save activity to database
async function updateComment(req, res, next) {
  const data = await Comment.find({
    id: req.body.id,
  });

  await Comment.findOneAndUpdate(
    { id: req.body.id },
    {
      annotator: req.body.name,
      sentiment: req.body.sentiment,
    },
    { upsert: true }
  );

  res.redirect("/");
}

module.exports = updateComment;
