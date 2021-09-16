const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

require('dotenv').config();

const dogsRouter = require("./dogs/dogs-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/dogs', dogsRouter);

server.use('/', (req, res, next) => {
    res.status(200).json({ message: "Api running!"})
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  
  module.exports = server;