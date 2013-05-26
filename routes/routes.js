var meal = require('../models/meal.js').meal
var user = require('../models/user.js').user

var mongoose = require('mongoose')

module.exports = {

  recipe:function(req, res) {
    var mealModel = mongoose.model('Meal', meal)

    var newMeal = new mealModel({
      ingredients:['pasta', 'olio']
    })

    var random = Math.random() * 1

    mealModel.find().limit(-1).skip(random).exec(function(err, data) {
      res.send(data)  	    
    })

  },
  login:function(req, res) {
	var username = req.body.user.username
	var password = req.body.user.password

	user.find({ username:username, password:password}, function(err, docs) {
	 console.log(docs)
	 if (docs.length > 0) {
	   req.session.username = username
	   res.send('authenticated')
	 }

	})
  },
  auth:function(req, res) {
 	if (req.session.username) {
	  res.send('authenticated')
      	}else{
	  res.send('not_authenticated')
	}

  }

}
