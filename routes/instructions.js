// export
async function instructions(req, res) {
  renderPage();
  function renderPage() {
    res.render("instructions.ejs", {});
  }
}

module.exports = instructions;
