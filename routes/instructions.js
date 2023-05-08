// export
async function instructions(req, res) {
  function renderPage() {
    res.render("instructions.ejs", {});
  }
}

module.exports = instructions;
