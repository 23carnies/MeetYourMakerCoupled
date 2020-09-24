const express = require("express");
const app = express();
const path = require("path");
const logger = require("morgan");
const nodemailer = require('nodemailer')

require("dotenv").config();
require("./config/database");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const uploadRouter = require("./routes/upload");
const productRouter = require("./routes/products");
const storeRouter = require("./routes/stores");
const calendarEventsRouter = require("./routes/calendarEvents")
const nodemailRouter = require("./routes/nodemail")
const reviewRouter = require('./routes/reviews')

const cors = require("cors");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

// app.use(express.static(path.join(__dirname, "build")));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/products", productRouter);
app.use("/api/stores", storeRouter);
app.use("/api/calendarEvents", calendarEventsRouter);
app.use("/api/nodemail", nodemailRouter);
app.use("/api/reviews", reviewRouter);

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`);
});
