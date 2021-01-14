var express = require("express");
var router = express.Router();

router.get("/login", function (req, res, next) {
  const {username,password}=req.body
  res.json({
    errno:0,
    data:{
      username,
      password,
    }
  })
});

router.get("/detail", function (req, res, next) {
  res.json({
    errno: 0,
    data: "OK",
  });
});

module.exports = router;