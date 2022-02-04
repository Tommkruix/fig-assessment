const express = require("express");
const cors = require("cors");

const routesV1 = require('../routes/v1');
const error = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(cors());
  app.use(express.static("public"));
  app.use('/api/v1', routesV1);

  app.use(error);
};
