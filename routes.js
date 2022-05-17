module.exports.UPLOAD_PATH = 'uploads'; 
const express = require("express"),
      router = express.Router(),
      itemCtrl = require("./item-controller"),
      userCtrl = require("./user-controller"),
      imageCtrl = require('./image-controller'),
      workoutCtrl = require("./workout-controller"),
      multer = require('multer'),
      upload = multer({ dest: module.exports.UPLOAD_PATH });
      
     
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:_username', userCtrl.getUser);
router.put('/users/:_username', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

router.post('/workouts', workoutCtrl.createWorkout);
router.get('/workouts',workoutCtrl.GetWorkouts);
router.delete('/workouts/:id',workoutCtrl.deleteWorkout);



router.post('/images', upload.single('image'), imageCtrl.uploadImage); 
router.get('/images', imageCtrl.getImages); 
router.get('/images/:id', imageCtrl.getImage); 
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;
