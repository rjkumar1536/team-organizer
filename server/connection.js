const mongoose = require('mongoose');
const UserSchema = require('./Schema/UserSchema');
const EventSchema = require('./Schema/EventSchema');
const CommSchema = require('./Schema/CommSchema');
const NotifySchema = require('./Schema/NotifySchema');
const SpecializationSchema = require('./Schema/SpecializationSchema');

mongoose.connect('mongodb://localhost:27017/teamDb',{useNewUrlParser: true, useUnifiedTopology : true});
mongoose.connection.once('open', ()=>{
  console.log('connection established');
});

const UserModel = mongoose.model('users', UserSchema);
const EventModel = mongoose.model('events', EventSchema);
const CommModel = mongoose.model('communications', CommSchema);
const NotifyModel = mongoose.model('notifications', NotifySchema);
const SpecializationModel = mongoose.model('specializations', SpecializationSchema);
module.exports = {
  UserModel : UserModel,
  EventModel : EventModel,
  CommModel : CommModel,
  NotifyModel : NotifyModel,
  SpecializationModel : SpecializationModel
}
