const logger = require("./middlewares/logger");

const express = require("express");
const app = express();

require("./startup/logging")();
require("./startup/routes")(app);
require("./database/db")();
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || 4000;
const server = app.listen(port, () =>
  console.warn(`Listening on port ${port}...`)
);

module.exports = server;
