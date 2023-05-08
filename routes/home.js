const getData = require("../utils/getData");
const Comment = require("../models/comment");

// export
async function home(req, res) {
  renderPage();

  function renderPage() {
    res.render("home.ejs", {});
  }
}

module.exports = home;
