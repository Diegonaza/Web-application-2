const mongoose = require('mongoose'); 


 
  const userSchema = new mongoose.Schema( {
	day: String,
	exercise:String,
	series:String,
	rest:String
}); 
 
  module.exports = mongoose.model('Workout', userSchema);

