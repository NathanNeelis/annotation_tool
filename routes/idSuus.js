// const getData = require("../utils/getData");
const Comment = require("../models/comment");

// export
async function idSuus(req, res) {
  // const data = await getData(endpoint);

  const data = await Comment.find({});

  // change this variable per annotator
  const noSentimentData = data.filter((item) => !item.stressfactor);
  const length = noSentimentData.length;

  renderPage(noSentimentData[0]);

  function renderPage(noSentimentData) {
    // console.log("this is all data", allData);
    res.render("annotate.ejs", {
      comments: noSentimentData,
      length: length,
    });
  }
}

module.exports = idSuus;
