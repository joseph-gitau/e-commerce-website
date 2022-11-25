var express = require("express");
var router = express.Router();

var database = require("../dbserver");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});



// export the router
module.exports = router;
