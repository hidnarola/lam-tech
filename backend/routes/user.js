var express = require("express");
var router = express.Router();

var auth = require("../middlewares/auth");
var authorization = require("../middlewares/authorization");
var config = require('./../config')

var index = require('./user/index');
var farm = require('./user/farm');


router.use("/", auth, authorization, index);
router.use("/farm", auth, authorization, farm);



module.exports = router;