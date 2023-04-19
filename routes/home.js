const getData = require("../utils/getData");
const Comment = require("../models/comment");

// export
async function home(req, res) {
  // const data = await getData(endpoint);

  const data = await Comment.find({});

  const noSentimentData = data.filter((item) => !item.sentiment);

  const length = noSentimentData.length;

  // const databaseData = await db.collection("data").find().toArray();

  renderPage(noSentimentData[0]);

  function renderPage(noSentimentData) {
    // console.log("this is all data", allData);
    res.render("home.ejs", {
      comments: noSentimentData,
      length: length,
    });
  }
}

module.exports = home;
