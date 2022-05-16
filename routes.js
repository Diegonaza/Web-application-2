module.exports.UPLOAD_PATH = 'uploads'; 
const express = require("express"),
      http = require('http'), //HTTP Server
      router = express.Router(),
      path = require('path'), //Utility that allows us to work with directory paths
      itemCtrl = require("./item-controller"),
      userCtrl = require("./user-controller"),
      imageCtrl = require('./image-controller'),
      multer = require('multer'),
      upload = multer({ dest: module.exports.UPLOAD_PATH });
      
     

//router.get("/:foo/:bar", itemCtrl.helloWorld);
router.use(express.static(path.resolve(__dirname,'views')));
router.post('/users', userCtrl.createUser);
router.get('/users', userCtrl.getUsers);
router.get('/users/:_username', userCtrl.getUser);
router.put('/users/:_username', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);



router.post('/images', upload.single('image'), imageCtrl.uploadImage); 
router.get('/images', imageCtrl.getImages); 
router.get('/images/:id', imageCtrl.getImage); 
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;
