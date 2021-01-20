const express = require("express"); // import the express package
const server = express(); // creates the server
const User = require("../api/user-model");

server.use(express.json());

// server.get("/", (req, res) => {
//   res.status(200).send("have we arrived? Indeed, we have! 💅");
// });

server.get(`/hello`, (req, res) => {
  res.status(200).json("Yes, hello! 👋");
});

server.post(`/api/users`, async (req, res) => {
  const user = req.body;
  if (!user.name || !user.bio) {
    res.status(400).json({ message: "must include name and bio" });
  } else {
    try {
      const newUser = await User.create(user);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

server.get(`/api/users`, async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ errorMessage: "the user information could not be retrieved" });
  }
});

server.get(`/api/users/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "unknown id" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

server.delete(`api/users/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.delete(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "unknown id" });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: "user could not be removed" });
  }
});

server.put(`/api/users/:id`, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (!changes.name || !changes.bio) {
    res.status(400).json({ message: "must include name and bio" });
  } else {
    try {
      const updatedUser = await User.update(id, changes);
      if (updatedUser) {
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: "unknown ID" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

module.exports = server;
