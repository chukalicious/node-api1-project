const express = require("express"); // import the express package

const server = express(); // creates the server

// handle requests to the root of the api, the / route
server.get("/", (req, res) => {
  res.send("Hello from la verga de tu madre");
});

// watch for connections on port 5000
server.listen(8000, () =>
  console.log("Server running on http://localhost:5000")
);
