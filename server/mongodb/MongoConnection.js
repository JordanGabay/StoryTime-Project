const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

require("dotenv").config();
const { MONGO_URI } = process.env;
const { users } = require("./data");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createFakeUsers = async () => {
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("Storytime");

    await db.collection("users").insertMany(users);

    client.close();
  } catch (error) {
    console.log(error.message);
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const client = await MongoClient(MONGO_URI, options);

    await client.connect();

    const db = client.db("Storytime");
    console.log("we're connected!");

    const result = await db
      .collection("users")
      .findOne({ email: req.body.email });

    // only add user if it doesn't exist
    if (!result) {
      await db.collection("users").insertOne({
        givenName: req.body.given_name,
        familyName: req.body.family_name,
        email: req.body.email,
      });
    }
    client.close();
    
    res
      .status(201)
      .json({ status: 201, data: result, message: "user is logged in." });
  } catch (error) {
    console.log(error.message);
  }
};

const getUser = async (req, res) => {
  const { handle } = req.params;
  console.log("15", handle);

  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("Storytime");

  await db.collection("users").findOne({ handle }, (err, result) => {
    console.log(result);
    console.log(err);
    if (result) {
      res.status(200).json({ status: 200, handle, data: result });
    } else if (err) {
      res.status(404).json({ status: 404, handle, data: err.message });
    } else {
      res.status(404).json({ status: 404, handle, data: "user not found" });
    }
    client.close();
  });
};

const getUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("Storytime");

  const users = await db.collection("users").find().toArray();

  res.status(200).json(users);

  client.close();
};

const postStory = async (req, res) => {
  console.log(req.body)
  const client = await MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("Storytime")
}

// only uncomment when you need to populate initial data
// createFakeUsers();

module.exports = { createUser, getUser, getUsers, postStory };
