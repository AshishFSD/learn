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

 const port = process.env.PORT || 3000
app.listen(port, () => {
  
       console.log(`server run on the port ${port}`)
});
