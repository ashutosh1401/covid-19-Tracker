const path = require("path");
const request = require("request");
const express = require("express");
const app = express();
const hbs = require("hbs");

const publicLocation = path.join(__dirname, "../public");
const viewsLocation = path.join(__dirname, "../templates/views");
const partialLocation = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsLocation);
hbs.registerPartials(partialLocation);

app.use(express.static(publicLocation));

app.get("", (req, res) => {
  res.render("index.hbs");
});
app.get("/state", (req, res) => {
  res.render("state.hbs");
});
app.listen(5000, () => {
  console.log("Server is on port 5000");
});
