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
var Hospitalised = require('../../models/hospitalised');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add sick animal details
// user/hospitalised
router.post('/', async (req, res) => {
    var schema = {
        "hospital_record_no": {
            notEmpty: true,
            errorMessage: "Hospital Record Number is required"
        },
        "date_of_created": {
            notEmpty: true,
            errorMessage: "Date of Created is required"
        },
        "animal_eid": {
            notEmpty: true,
            errorMessage: "Animal EID is required"
        },
        "weight": {
            notEmpty: true,
            errorMessage: "Weight is required"
        },
        "temperature": {
            notEmpty: true,
            errorMessage: "Temperature is required"
        },
        "health_issue": {
            notEmpty: true,
            errorMessage: "Health Issue is required"
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
        "cause_of_sickness": {
            notEmpty: true,
            errorMessage: "Cause of Sickness is required"
        },
        "action_to_be_taken": {
            notEmpty: true,
            errorMessage: "Action To be Taken is required"
        },
        "estimate_start_date": {
            notEmpty: true,
            errorMessage: "Estimate Start Date is required"
        },
        "estimate_end_date": {
            notEmpty: true,
            errorMessage: "Estimate End Date is required"
        },

    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var reg_obj = {
            "user_id": req.userInfo.id,
            "hospital_record_no": req.body.hospital_record_no,
            "date_of_created": req.body.date_of_created,
            "animal_eid": req.body.animal_eid,
            "weight": req.body.weight,
            "temperature": req.body.temperature,
            "health_issue": req.body.health_issue,
            "company_name": req.body.company_name,
            "name": req.body.name,
            "address": req.body.address,
            "state": req.body.state,
            "country": req.body.country,
            "email": req.body.email,
            "phone_no": req.body.phone_no,
            "cause_of_sickness": req.body.cause_of_sickness,
            "action_to_be_taken": req.body.action_to_be_taken,
            "estimate_start_date": req.body.estimate_start_date,
            "estimate_end_date": req.body.estimate_end_date,
        };

        var customer_resp = await common_helper.insert(Hospitalised, reg_obj);
        if (customer_resp.status == 0) {
            logger.debug("Error = ", customer_resp.error);
            res.status(config.INTERNAL_SERVER_ERROR).json(customer_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Sick animals has been added successfully", "data": customer_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});


//sick listing
//user/hospitalised
router.get("/", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(Hospitalised, { "user_id": new ObjectId(user_id) }, 2);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});



module.exports = router;