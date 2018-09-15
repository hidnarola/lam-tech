var express = require("express");
var router = express.Router();

var auth = require("../middlewares/auth");
var authorization = require("../middlewares/authorization");
var config = require('./../config')

var index = require('./user/index');
var farm = require('./user/farm');
var contract = require('./user/contract');
var customer = require('./user/customer');
var agent = require('./user/agent');
var freight = require('./user/freight');
var purchase = require('./user/purchase');
var induction = require('./user/induction');
var hospitalised = require('./user/hospitalised');
var death = require('./user/death');
var delivery = require('./user/delivery');


router.use("/", auth, authorization, index);
router.use("/farm", auth, authorization, farm);
router.use("/contract", auth, authorization, contract);
router.use("/customer", auth, authorization, customer);
router.use("/agent", auth, authorization, agent);
router.use("/freight", auth, authorization, freight);
router.use("/purchase", auth, authorization, purchase);
router.use("/induction", auth, authorization, induction);
router.use("/hospitalised", auth, authorization, hospitalised);
router.use("/death", auth, authorization, death);
router.use("/delivery", auth, authorization, delivery);



module.exports = router;