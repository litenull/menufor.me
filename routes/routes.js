var meal = require('../models/meal.js').meal
var user = require('../models/user.js').user

var mongoose = require('mongoose')

module.exports = {

  recipe:function(req, res) {
    var mealModel = mongoose.model('Meal', meal)

    mealModel.count(function(err, count) {
       var random = Math.random() * count;
       mealModel.find().limit(-1).skip(random).exec(function(err, data) {
       res.send(data)  	    
    })
		    
		    
    })


  },
  login:function(req, res) {
	var username = req.body.user.username
	var password = req.body.user.password

	user.find({ username:username, password:password}, function(err, docs) {
	 if (docs.length > 0) {
	   req.session.username = username
	   res.send(username)
	 }else{
	   res.send('NOT FOUND')
	 }

	})
  },
  auth:function(req, res) {
 	if (req.session.username) {
	  res.send(req.session.username)
      	}else{
	  res.send(401)
	}

  },
  clearsession:function(req, res) {
	req.session = null
	res.send('done')
  },
  add_recipe:function(req, res) {
	var mealModel = mongoose.model('Meal', meal)
		     
	console.log(req.body)
	var newMeal = new mealModel({
	 ingredients:req.body.ingredients
	})

	newMeal.save()
	res.send('done')
	
  }

}
