const express = require("express");
const { MongoClient } = require("mongodb");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const PORT = 2400;

var app = express();
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

// app.use(require('./routes'));

app.post("/login", async (req, res) => {
  console.log(req.body);
  //Coonect ot your db
  //Then first, you want to query your users collection to see if a document with the email already exists
  //If not create a new one and insert it to your collection
  //Send some response
  //creates new client
  try {
    const client = await MongoClient(MONGO_URI, options);

    //connect to the client
    await client.connect();

    //connect to the database (db name is provided as an argument to the function)
    const db = client.db("Storytime");
    console.log("We're connected!");

    await db
      .collection("users")
      .insertOne({
        name: req.body.given_name,
        familyName: req.body.family_name,
        email: req.body.email,
        handle: "JordanGabay"
      });

    //close the connection to the database server
    client.close();
    console.log("We're not connected anymore...");
    res.status(201).json({ msg: "test" });
  } catch (err) {
    console.log(err.message);
  }
});

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});
