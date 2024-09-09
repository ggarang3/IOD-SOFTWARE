const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => { // Home directory
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Hello, ${username}!`);
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  const age = req.query.age;
  res.send(`Hello, ${username}! You are ${age} years old.`);
});