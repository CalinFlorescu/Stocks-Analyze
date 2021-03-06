const express = require("express");
const cors = require("cors");

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  return app;
};
