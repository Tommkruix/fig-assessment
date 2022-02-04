const mongoose = require("mongoose");
const figDb = require("../config/default.json");

module.exports = function () {
  const db = figDb.db;
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.warn(`Connected to ${db}...`));
};
