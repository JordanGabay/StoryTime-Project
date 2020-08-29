const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { createUser, getUser, getUsers } = require("./mongodb/MongoConnection");

const PORT = 2400;

var app = express();
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(require('./routes'));

app.post("/login", createUser)
app.get("/profile/:handle", getUser)
app.get("/users", getUsers)

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});
