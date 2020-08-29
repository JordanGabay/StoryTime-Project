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
    console.log("we're connected!");

    await db.collection("users").insertMany(users);

    client.close();
    console.log("we're not connected anymore...");
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

    // TODO: info must come from form fields
    await db.collection("users").insertOne({
      name: "Random",
      familyName: "User",
      email: "randomuser@email.com",
      handle: "ARandomUser",
      stories: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros urna, pretium nec neque non, pharetra vehicula tellus. In a mi orci. Curabitur in lorem a nibh fringilla ultrices vel quis ipsum. Maecenas nec maximus lacus. Nam vitae arcu id eros porttitor ultrices. Integer feugiat nulla in elit semper, eu fermentum augue finibus. Vestibulum interdum laoreet vehicula. Nulla orci turpis, hendrerit eget urna vitae, facilisis tincidunt diam. Nulla iaculis felis massa. Nullam sed elit eu dui pellentesque scelerisque. Nullam rutrum ipsum id purus tristique, non vestibulum nulla imperdiet. Pellentesque luctus, elit sit amet commodo gravida, quam ante pretium purus, sit amet consequat sem nulla id dolor.",
      ],
    });

    client.close();
    console.log("we're not connected anymore...");
    res.status(201).json({ message: "test" });
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

createFakeUsers()

module.exports = { createUser, getUser };

