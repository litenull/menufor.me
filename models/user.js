var mongoose = require('mongoose')

var user = new mongoose.Schema({
  username:String,
  password:String,
  email:String
})

var userModel = mongoose.model('User', user);

module.exports = {
  user:userModel
}
