const express = require("express"),
      router = express.Router();

      router.get("/:foo/:bar",(req, res)=>{
        res.json({message: "Hello World",
                            "data":[
                                req.params.foo,
                                req.params.bar
                            ]  })
    })

module.exports = router;