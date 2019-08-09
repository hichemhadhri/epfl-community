const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRouter = require('./api/routes/users');

//conncetion to database
mongoose.connect('mongodb+srv://hichem:Nabilbolbol123@epflcom-dpwfb.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true , useFindAndModify : false });

//parsing the request
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//using Routes
app.use('/users',usersRouter);



module.exports = app;
