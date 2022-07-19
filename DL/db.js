const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true }, (err) => {
      if (err) {
        throw err;
      }

      console.log("Connection Success, State:", mongoose.connection.readyState);
    });
  } catch (e) {
    console.log("error mongoose: ", e);
  }
};

module.exports = { connect };
