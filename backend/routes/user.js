var express = require("express");
var router = express.Router();

var auth = require("../middlewares/auth");
var authorization = require("../middlewares/authorization");
var config = require('./../config')

var index = require('./user/index');
var farm = require('./user/farm');
var contract = require('./user/contract');
var customer = require('./user/customer');


router.use("/", auth, authorization, index);
router.use("/farm", auth, authorization, farm);
router.use("/customer", auth, authorization, customer);



module.exports = router;