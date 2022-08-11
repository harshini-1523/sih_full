const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let user = new Schema({
  name: {
    type: String
  },
  designation: {
    type: String
  },
  address: {
    type: String
  },
  email:{
    type: String
  },
  mobile:{
    type: Number
  },
  password:{
    type: String
  }
});

module.exports = mongoose.model("Userdata", user);