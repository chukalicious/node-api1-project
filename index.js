const express = require("express");
const server = require("./api/server");

server.use(express.json());

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
