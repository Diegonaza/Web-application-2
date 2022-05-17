const Workout = require('./models/workout'); 

exports.createWorkout = function(req, res) {  
    let newworkout = new Workout(req.body); 
    newworkout.save(function (err, workout) {  
        if (err) {  
            res.status (400).json(err); 
        } 

        res.json(workout);  
}); 
};

exports.GetWorkouts = function(req, res) { 
    Workout.find({}, function (err, workouts) { 
      if (err) { 
        res.status(400).json(err);  
      }  
      res.json(workouts); 
    });  
  };
/*
  exports.getUser = function(req, res) { 
    User.findOne({username: req.params._username}, function (err, user) { 
      if (err) { 
        res.status(400).json(err); 
      }  
      res.json(user); 
    });  
  };

  exports.updateUser = function(req, res) { 
    User.findOneAndUpdate({username: req.params._username}, req.body, {new: true},function (err, user) { 
      if (err) { 
        res.status(400).json(err); 
      }  
      res.json(user); 
    });  
  };
*/
  exports.deleteWorkout = function(req, res) { 
    Workout.findByIdAndRemove(req.params.id, function (err, workout) { 
      if (err) { 
        res.status(400).json(err); 
      }  
      res.json(workout); 
    });  
  };


