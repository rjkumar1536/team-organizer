const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	user_id : String,
	name : String,
	email_id : String,
	designation : String,
	sap_user_id : String,
	mobile_no : String,
	location : {city : String, desk_no : String, country : String },
	team_name : String,
	project_manager: String,
	line_manager : String,
	experience : Number,
	date_of_birth : Date,
	specialization : [String],
	status : Number,
	img : { data: Buffer, contentType: String },
	description : String,
	created_by : String,
	created_on : Date,
	creation_time: Date
})

module.exports = schema;
