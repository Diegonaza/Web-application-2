const http = require("http"),
      logger =  require("morgan"),
      express = require("express"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");

let app = express();
let port = 8000;

app.use(bodyParser.json());
app.use(require('./routes'));
app.use(logger("tiny"));


const dbURI = "mongodb://localhost/test";

  mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
          .then((result) => console.log('connected to db'))
          .catch((err) => console.log(err));

app.listen(port, function(err){
    console.log("Listening on Port " + port)
});