var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  console.log(req);
  res.render("index", { title: "Express" });
});

// EN ki gthy defr FTRH

module.exports = router;
