var mongoose = require('mongoose')

var meal = new mongoose.Schema({
  ingredients:Array
})

module.exports = {
  meal:meal
}
