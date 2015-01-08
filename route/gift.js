var express= require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Gift = require('../model/gifts');

router.route('/users/gifts')

.post(function(req, res){
  console.log(req.body);
  var gift = new Gift({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });

  gift.save(function(err){

    if (err){
      res.send(err);
    }
    res.json(gift);
  });
})

.get(function(req, res){
  Gift.find(function(err, all_gift){

    if(err){
      res.send(err);
    }
    res.json(all_gift);
  });
});

router.route('/users/gifts/:gifts_id')

.get(function(req, res){
  Gift.findById(req.params.gifts_id, function(err, sin_gift) {

    if(err){
      res.send(err);
    }
    res.json(sin_gift);
  });
})

.put(function(req, res){
  Gift.findById(req.params.gifts_id, function(err, sin_gift) {
      sin_gift.name= req.body.name;
      sin_gift.description= req.body.description;
      sin_gift.price= req.body.price;

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