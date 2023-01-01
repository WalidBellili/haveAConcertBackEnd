const express = require("express");
const user = express();
// const passport = require("../config/passport");
const { User } = require("../models/index");

user.get("/me", async (req, res) => {
  res.json(req.user);
});

module.exports = user;
