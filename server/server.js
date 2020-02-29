const express = require('express');
const { UserModel , EventModel,CommModel ,NotifyModel, SpecializationModel } = require('./connection');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const jsonParser   = bodyParser.json()
app.use(cors())
//any image path
const imgPath = '../../team-organizer/organizer/src/static/images/cards/user.jpeg';
let record = new UserModel({name : "Rajender", description : "changed. It was popularised in the 1960s with the release of  \
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\
It is a long established fact that a reader will be distracted by the readable content of \
 a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less \
 normal distribution of letters, as opposed to using 'Content here, content here', making it look \
 like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum \
 as their default model text, and a search for 'lorem ipsum' will uncover many web sites \
  still in their infancy. Various versions have evolved over the years, \
 sometimes by accident, sometimes on purpose (injected humour and the like).\
", img : { data : fs.readFileSync(imgPath), contentType : 'image/png' }});
record.save();
app.get('/api/users', (req, res)=>{
  UserModel.find({}, (error, doc)=>{
    res.set({'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    // res.contentType(doc[0].img.contentType);
    res.send(doc);
  })
})
app.listen(5000);
