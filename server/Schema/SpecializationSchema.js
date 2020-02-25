const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  skill_id : String,
	skill_category : String,
	skill_name : String
})

module.exports = schema;
