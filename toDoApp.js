const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
let userItems = ["To buy mill", "To take and wash my clouths", "To get a job"];
/// use of ejs
app.listen(8080, () => {
  console.log("listening on port 8080");
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();
  var options = { weekday: "long", day: "numeric", month: "long" };
  var day = today.toLocaleDateString("en-US", options);

  console.log(day);
  res.render("list", { CurrentDay: day, newItems: userItems });
});

app.post("/", (req, res) => {
  var userItem = req.body.userListItem;
  userItems.push(userItem);

  res.redirect("/");
});
