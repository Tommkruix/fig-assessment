const mongoose = require("mongoose");
// const figDb = require("../config/default.json"); // remove comment if using config

module.exports = function () {
  const db = `${process.env.FIG_DB}`;
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.warn(`Connected to ${db}...`));
};
