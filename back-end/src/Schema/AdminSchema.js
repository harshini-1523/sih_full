const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let admin = new Schema({
  name: {
    type: String
  },
  designation: {
    type: String
  },
  role : {
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

module.exports = mongoose.model("Admindata", admin);