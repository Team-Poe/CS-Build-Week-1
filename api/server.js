const express = require("express");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

// sanity check
server.get("/", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

module.exports = server;
