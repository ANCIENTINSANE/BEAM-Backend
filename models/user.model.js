const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { 
    type: String,
    required: true 
  },
  password: {
    type: String,
    required: true 
  },
  name: {
    type: String,
    required: true
  },
  usertype: {
    type: String,
    enum: ["student", "teacher"],
    required: true 
  }
});

module.exports = mongoose.model("User", userSchema);
