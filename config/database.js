const mongoose = require("mongoose");

module.exports.db = async () => {
  try {
    await mongoose.connect("mongodb+srv://zainabsaiyed97:12345@movie.f78ks.mongodb.net/");
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};
