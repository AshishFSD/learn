const express = require("express");
const path = require('path');
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public','Home.html'));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
