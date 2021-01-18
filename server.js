const express = require("express"); // import the express package

const server = express(); // creates the server

server.use(express.json);

server.get("/", (req, res) => {
  res.status(200).send("have we arrived? Indeed, we have! 💅");
});

server.get(`/hello`, (req, res) => {
  res.status(200).json("Yes, hello! 👋");
});

server.post(`/api/users`, (req, res) => {
  res.status(200).json();
});

module.exports = server;
