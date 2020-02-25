const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  notification_id : String,
	descriptions : String
})

module.exports = schema;
