const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbFunction = async (database) => {
  //creates new client
  const client = await MongoClient(MONGO_URI, options);

  //connect to the client
  await client.connect();

  //connect to the database (db name is provided as an argument to the function)
  const db = client.db(database);
  console.log("We're connected!");

  await db.collection("users").insertOne({ name: req.body.email });

  //close the connection to the database server
  client.close();
  console.log("We're not connected anymore...");
};

dbFunction("Storytime");
