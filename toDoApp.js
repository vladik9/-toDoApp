const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
/// use of ejs
app.listen(8080, () => {
  console.log("listening on port 8080");
});

app.set("view engine", "ejs");

var today = new Date();

var options = { weekday: "long", day: "numeric", month: "long" };

var day = today.toLocaleDateString("en-US", options);
console.log(day);
app.get("/", (req, res) => {
  res.render("list", { CurrentDay: day });
});

app.post("/", (req, res) => {
  var userItem = req.body.userListItem;
  console.log(userItem);
});
