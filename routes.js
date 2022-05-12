const express = require("express"),
      router = express.Router(),
      itemCtrl = require("./item-controller"),
      userCtrl = require("./user-controller");
      var multer = require('multer'), 
      upload = multer({ dest: module.exports.UPLOAD_PATH }), 
      imageCtrl = require('./image-controller');

//router.get("/:foo/:bar", itemCtrl.helloWorld);
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
module.exports.UPLOAD_PATH = 'uploads'; 