const express = require("express");
const user = express();
const { User } = require("../models/index");

user.get("/", (req, res) => {
  
});

module.exports = user;
