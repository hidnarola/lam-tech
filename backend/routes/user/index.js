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
var Company = require('../../models/company');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add Company details
// user/add_company
router.post('/add_company', async (req, res) => {
    var schema = {
        "registration_number": {
            notEmpty: true,
            errorMessage: "Registration Number is required"
        },
        "name": {
            notEmpty: true,
            errorMessage: "Company Name is required"
        },
        "email": {
            notEmpty: true,
            errorMessage: "Email is required"
        },
        "state": {
            notEmpty: true,
            errorMessage: "State is required"
        },
        "country": {
            notEmpty: true,
            errorMessage: "Country is required"
        },
        "phone_no": {
            notEmpty: true,
            errorMessage: "Phone Number is required"
        }
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var reg_obj = {
            "user_id": req.userInfo.id,
            "registration_number": req.body.registration_number,
            "name": req.body.name,
            "email": req.body.email,
            "state": req.body.state,
            "country": req.body.country,
            "phone_no": req.body.phone_no
        };
        var company_resp = await common_helper.insert(Company, reg_obj);
        if (company_resp.status == 0) {
            logger.debug("Error = ", company_resp.error);
            res.status(config.INTERNAL_SERVER_ERROR).json(company_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Company details has been added successfully", "data": company_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});



module.exports = router;