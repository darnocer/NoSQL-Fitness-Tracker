// dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const db = require("./models");

// define PORT
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoDB connection
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/workouts";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  family: 4 // Use IPv4, skip trying IPv6
};
mongoose.connect(MONGODB_URI,options)

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

// listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
