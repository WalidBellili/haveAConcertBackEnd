require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const port = 5000;
const cors = require("cors");

const userRoutes = require("./routes/user");

require("./models/index");

app.use(cors("*"));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
