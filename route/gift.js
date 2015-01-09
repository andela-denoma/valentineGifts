//BASE SETUP
//=========================================================

//call the packages we need

var express= require('express');  //call express
var router = express.Router();     //get an instance of the express Router
var bodyParser = require('body-parser'); //call body-parser

// configure app to use bodyParser()
// this will let us get the data from a POST

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Gift = require('../model/gifts');

// ROUTES FOR OUR API
//=========================================================


router.route('/')
  .get(function(req, res) {

    res.redirect('/users/gifts');
  });

// on routes that end in /users/gifts
// ----------------------------------------------------
router.route('/users/gifts')

// create a gift

.post(function(req, res){
    console.log(req.body);
    var gift = new Gift ({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
      });

  // save the gift and check for errors
  gift.save(function(err){

    if (err){
      res.send(err);
    }
    res.json(gift);
  });
})

// get all the gifts

.get(function(req, res){

  // Gift.find(function(err, all_gift){

  //   if(err){
  //     res.send(err);
  //   }
  //   res.json(all_gift);
  // });
  //removes the -v and _id that comes by default when a gift is created
  Gift.find({}, 'name description price -_id', function (err, all_gift) {
     if(err){
       return handleError(err);
     }
     res.json(all_gift);
   });
});

// on routes that end in /gifts/:gifts_id
// ----------------------------------------------------
router.route('/users/gifts/:gifts_id')

// get the gift with that id

.get(function(req, res){
  // use our gift model to find the gift we want
  Gift.findById(req.params.gifts_id, function(err, sin_gift) {

    if(err){
      res.send(err);
    }
    res.json(sin_gift);
  });
})

// update the gift with this id

.put(function(req, res){
  Gift.findById(req.params.gifts_id, function(err, sin_gift) {
      sin_gift.name= req.body.name;                // update the gift name
      sin_gift.description= req.body.description;  // update the gift description
      sin_gift.price= req.body.price;              // update the gift price

    // save the gift
    sin_gift.save(function (err){
      if(err){
      res.send(err);
      }
      res.json(sin_gift);
    });
  });
})

.delete(function(req, res) {
  Gift.findById(req.params.gifts_id, function(err, sin_gift){
    sin_gift.remove(function(err) {

      if(err){
        res.send(err);
      }
      res.json('Document Deleted');
    });
  });
});

module.exports = router;