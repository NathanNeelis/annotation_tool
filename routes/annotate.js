const Comment = require("../models/comment");

// save activity to database
async function updateComment(req, res, next) {
  const id = req.body.annotaterID;
  await Comment.findOneAndUpdate(
    { id: req.body.id },
    {
      annotator: req.body.annotaterID,
      stressfactor: req.body.stressfactor,
    },
    { upsert: true }
  );

  res.redirect(`/${id}`);
}

module.exports = updateComment;
