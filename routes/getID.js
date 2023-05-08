// save activity to database
async function getID(req, res, next) {
  const id = req.body.annotateID;

  res.redirect(`/${id}`);
}

module.exports = getID;
