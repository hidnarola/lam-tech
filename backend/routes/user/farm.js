var express = require('express');
var router = express.Router();
var config = require('../../config');
var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
var path = require('path');

const saltRounds = 10;

var common_helper = require('../../helpers/common_helper');
var Company = require('../../models/companyfarm');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add Company details
// user/farm/add
router.post('/add', async (req, res) => {
    var schema = {
        "property_id": {
            notEmpty: true,
            errorMessage: "Property Id is required"
        },
        "property_name": {
            notEmpty: true,
            errorMessage: "Property Name is required"
        },
        "state": {
            notEmpty: true,
            errorMessage: "State is required"
        },
        "country": {
            notEmpty: true,
            errorMessage: "Country is required"
        },
        "address": {
            notEmpty: true,
            errorMessage: "Address is required"
        },
        "region": {
            notEmpty: true,
            errorMessage: "Region is required"
        }
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var reg_obj = {
            "user_id": req.userInfo.id,
            "property_id": req.body.property_id,
            "property_name": req.body.property_name,
            "state": req.body.state,
            "country": req.body.country,
            "address": req.body.address,
            "region": req.body.region
        };

        var farm_resp = await common_helper.insert(Company, reg_obj);
        if (farm_resp.status == 0) {
            logger.debug("Error = ", farm_resp.error);
            res.status(config.INTERNAL_SERVER_ERROR).json(farm_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Farm details has been added successfully", "data": farm_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});



module.exports = router;