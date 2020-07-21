// dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// define PORT
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// routes
// require("./routes/api.js")(app);
require("./routes/html.js")(app);

// listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
