var express = require('express');
var router = express.Router();
var config = require('../../config');
var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
var path = require('path');
var _ = require('underscore');

const saltRounds = 10;

var common_helper = require('../../helpers/common_helper');
var Death = require('../../models/death');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add death animal details
// user/death
router.post('/', async (req, res) => {
    var schema = {
        "death_record_no": {
            notEmpty: true,
            errorMessage: "Death Record Number is required"
        },
        "date_of_death": {
            notEmpty: true,
            errorMessage: "Date of Death is required"
        },
        "animal_eid": {
            notEmpty: true,
            errorMessage: "Animal EID is required"
        },
        "anticipated_cause_of_death": {
            notEmpty: true,
            errorMessage: "Anticipated Cause is required"
        },
        "company_name": {
            notEmpty: true,
            errorMessage: "Company Name is required"
        },
        "name": {
            notEmpty: true,
            errorMessage: "Name is required"
        },
        "state": {
            notEmpty: true,
            errorMessage: "State is required"
        },
        "country": {
            notEmpty: true,
            errorMessage: "Country is required"
        },
        "email": {
            notEmpty: true,
            errorMessage: "Email is required"
        },
        "phone_no": {
            notEmpty: true,
            errorMessage: "Phone Number is required"
        },
        "address": {
            notEmpty: true,
            errorMessage: "Address is required"
        },
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var obj = {
            "user_id": req.userInfo.id,
            "death_record_no": req.body.death_record_no,
            "date_of_death": req.body.date_of_death,
            "animal_eid": req.body.animal_eid,
            "anticipated_cause_of_death": req.body.anticipated_cause_of_death,
            "company_name": req.body.company_name,
            "name": req.body.name,
            "address": req.body.address,
            "state": req.body.state,
            "country": req.body.country,
            "email": req.body.email,
            "phone_no": req.body.phone_no,
            "confirmed_cause_of_death": req.body.confirmed_cause_of_death
        };
        var customer_resp = await common_helper.insert(Death, obj);
        if (customer_resp.status == 0) {
            logger.debug("Error = ", customer_resp.error);
            res.status(config.INTERNAL_SERVER_ERROR).json(customer_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Death animals has been added successfully", "data": customer_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});


//Death listing
//user/death
router.get("/", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(Death, { "user_id": new ObjectId(user_id) }, 2);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});



module.exports = router;