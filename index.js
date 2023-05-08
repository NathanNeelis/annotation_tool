require("dotenv").config();

const port = process.env.PORT || 2000;
const express = require("express");
const bodyParser = require("body-parser"); // load body parser for http requests
const compression = require("compression"); // compression pages
const path = require("path"); // path for easy paths
const app = express(); // save express to app variable

// database connection
const connectMDB = require("./config/mongooseConfig"); // load Mongoose config
connectMDB(); // connect with database

// Routes
const home = require("./routes/home");
const instructions = require("./routes/instructions");
const id = require("./routes/id");
const annotate = require("./routes/annotate");
const getID = require("./routes/getID");

app
  .use(express.static(path.resolve("public")))
  .use(compression())
  .use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app
  .get("/", home)
  .get("/instructions", instructions)
  .get("/abc", id);

app
  .post("/abc", annotate)
  .post("/instructions", getID);

app.listen(port, () => {
  console.log(`Server is working at http://localhost:${port}`);
});
