const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path= require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({storage: storage});

const User = require('../models/user');


//sign up route
router.post('/sign',( req, res , next) =>{ console.log("signing up");
  console.log(req.body);
       const user = new User({
         _id : mongoose.Types.ObjectId(),
         name : req.body.nom ,
         age : req.body.age ,
         section : req.body.section ,
         niveau : req.body.niveau ,
         mail : req.body.mail ,
         password : req.body.password,
       });
       user
       .save()
       .then(result => {
         console.log(result);
       res.status(200).json({
         message : result});
     })
       .catch(err =>{
         console.log(err);
         res.status(500).json(error);
       });
});

//log in route
router.post('/log',(req,res,next) => {
  console.log(req.body);
  User.findOne({
    mail : req.body.mail,
    password : req.body.password
  })
  .select('-__v')
  .exec()
  .then(result =>{
    if (result){
      console.log(result);
      res.status(200).json(
    {
      success : true,
      message:result
      });
    }
    else {

      res.status(404).json({
        success: false,
        message : ' user not found please make sure you provide the right informations '
      })
    }
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      success : false
    }
      );
  })
});
            

// upload pdp route
router.post('/image/:id',upload.single('fileData'),(req,res,next) =>{
  console.log('image is uploaded');
console.log(req.file);
const id = req.params.id;
User.findByIdAndUpdate(id, {$set:{pdp: req.file.filename}}, {new: true})
.exec()
.then(result => res.status(200).json(result))
.catch(error => console.log(error));
});


module.exports = router;
