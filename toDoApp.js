// require body parser module to have access tp the body of html document
const bodyParser = require("body-parser");
// require a express module for server side
const express = require("express");
// create a new app from express
const app = express();
// special implementation for body parser
app.use(bodyParser.urlencoded({ extended: true }));
// special implementation for staic files like css or imeges to have acces
//to give acces to express to this files
app.use(express.static("Public"));
//declare an array of stings in global scope to be accesible in all functoins
let userItems = ["To buy mill", "To take and wash my clouths", "To get a job"];
/// use of ejs, set the view engine for ejs
// it's replace the html default file for rote /
app.set("view engine", "ejs");
//start a local server on port 8080
app.listen(8080, () => {
  console.log("listening on port 8080");
});
// manage the get request from browser
app.get("/", (req, res) => {
  //make a variable for new Date object
  var today = new Date();
  // set a option for date to local function toLocalDateString
  var options = { weekday: "long", day: "numeric", month: "long" };
  // get special date for location  in en-US format and filtre it via options
  var day = today.toLocaleDateString("en-US", options);
  console.log(day);
  // use of render function to replace in ejs file variables CurrentDay and newItems
  res.render("list", { CurrentDay: day, newItems: userItems });
});
// manage post request
app.post("/", (req, res) => {
  //get from the html body variable userListItem
  var userItem = req.body.userListItem;
  // use an array method to push user input
  if (userItem === "") {
    userItem = "your item";
  }
  userItems.push(userItem);
  // use a redirect method the root /
  res.redirect("/");
});
