const getData = require("../utils/getData");
const Comment = require("../models/comment");

// export
async function home(req, res) {
  // const data = await getData(endpoint);

  // const data = await Comment.find({});

  // // change this variable per annotator
  // const noSentimentData = data.filter((item) => !item.sentiment_ano);
  // const length = noSentimentData.length;

  // renderPage(noSentimentData[0]);

  function renderPage() {
    // console.log("this is all data", allData);
    res.render("home.ejs", {});
  }
}

module.exports = home;
