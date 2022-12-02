const express = require("express");
const user = express();
const passport = require("../config/passport");
const { User } = require("../models/index");

user.get("/", (req, res) => {
  res.json("ok");
});

module.exports = user;
