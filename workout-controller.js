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

  exports.deleteWorkout = function(req, res) { 
    Workout.findByIdAndRemove(req.params.id, function (err, workout) { 
      if (err) { 
        res.status(400).json(err); 
      }  
      res.json(workout); 
    });  
  };


