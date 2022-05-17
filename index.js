const http = require("http"),
      path = require('path'), //Utility that allows us to work with directory paths
      logger =  require("morgan"),
      express = require("express"),
      mongoose = require("mongoose"),
      dotenv = require("dotenv");

let app = express();
let port = 8000;

dotenv.config();

app.use(logger("tiny"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'views')));
app.use(require('./routes'));



const dbURI = "mongodb://localhost/test";

  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
          .then((result) => console.log('connected to db'))
          .catch((err) => console.log(err));

app.listen(port, function(err){
    console.log("Listening on Port " + port)
});