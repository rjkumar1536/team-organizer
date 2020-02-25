const express = require('express');
const { UserModel , EventModel,CommModel ,NotifyModel, SpecializationModel } = require('./connection');
const app = express();
let record = new SpecializationModel({skill_id : 'IN-12', skill_name : 'Tech', skill_category : "Fun"});
// console.log(record);
// record =
record.save().then(data=>{
  console.log(data);
})
SpecializationModel.find({}, (error, data)=>{
  console.log(data);
})
app.listen(6000);
