const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  event_id : String,
	topic : String,
	speaker : String,
	start_date  : Date,
	end_date : Date,
	start_time : Date,
	end_time : Date,
	venue: String,
	img : { data: Buffer, contentType: String },
  created_on : Date,
  creation_time: Date
})

module.exports = schema;
