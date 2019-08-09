const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  name : String,
  age : String ,
  section : String ,
  niveau : String ,
  mail : String ,
  password : String,
  pdp : {type : String , default : 'pdpm.jpg'}
});


module.exports = mongoose.model('user',userSchema);
