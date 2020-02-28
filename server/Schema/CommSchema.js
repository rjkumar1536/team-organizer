const mongoose = require("mongoose");
// schema for communication
const schema = new mongoose.Schema({
  user_id: String,
  message_id: String,
  message: String,
  status: Number,
  created_on: Date,
  creation_time: Date
});

module.exports = schema;
