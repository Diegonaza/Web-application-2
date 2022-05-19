module.exports.UPLOAD_PATH = 'uploads'; 
const express = require("express"),
      router = express.Router(),
      workoutCtrl = require("./workout-controller");
   
      
     


router.post('/workouts', workoutCtrl.createWorkout);
router.get('/workouts',workoutCtrl.GetWorkouts);
router.delete('/workouts/:id',workoutCtrl.deleteWorkout);





module.exports = router;
