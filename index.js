require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const userRoutes = require("./routes/user");

require("./models/index");

app.use(cors("*"));
app.use(express.json());
app.use(express.static("public"));

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
