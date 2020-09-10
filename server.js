const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
require("dotenv").config();

mongoose
  .connect(process.env.mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();

app.use(express.json());
app.use(cors());

//passport configuration
require("./config/passport")(passport);

// use route
app.use("/api/auth", require("./routes/api/authRoute"));
app.use("/api/items", require("./routes/api/itemRoute"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public", "build")));
  app.use("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "build", "index.html"));
  });
}

app.listen(process.env.port || 5000, () => {
  console.log(`Server is running on port: ${process.env.port || port}`);
});
