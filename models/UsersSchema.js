const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Users = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Users", Users);
