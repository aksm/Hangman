const express = require('express');
const path = require("path");
const randomWord = require('random-word');
var app = express();

app.set("port", process.env.PORT || 8080);
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});
app.get("/word", function(req, res) {
  const word = randomWord();
  console.log(word);
  res.jsonp({Word: word});
});
app.listen(app.get("port"), function() {console.log("Hollaback on port: "+app.get("port"));});
