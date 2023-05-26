const Comment = require("../models/comment");

// save activity to database
async function updateCommentRes(req, res, next) {
  const id = req.body.annotaterID;
  await Comment.findOneAndUpdate(
    { id: req.body.id },
    {
      annotator_researcher: req.body.annotaterID,
      stressfactor_researcher: req.body.stressfactor,
    },
    { upsert: true }
  );

  res.redirect(`/${id}`);
}

module.exports = updateCommentRes;
