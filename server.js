//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("./dist/persons-app-v7"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/persons-app-v7/index.html"));
});

console.log("process.env.PORT", process.env.PORT);
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4309);
