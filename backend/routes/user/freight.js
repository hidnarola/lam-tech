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
var Freight = require('../../models/freight');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add freight details
// user/freight
router.post('/', async (req, res) => {
    var schema = {
        "registration_number": {
            notEmpty: true,
            errorMessage: "Registration Number is required"
        },
        "name": {
            notEmpty: true,
            errorMessage: "Company Name is required"
        },
        "address": {
            notEmpty: true,
            errorMessage: "Address is required"
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
        "receipt_email": {
            notEmpty: true,
            errorMessage: "Receipt Email is required"
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
            "address": req.body.address,
            "state": req.body.state,
            "country": req.body.country,
            "email": req.body.email,
            "receipt_email": req.body.receipt_email,
            "phone_no": req.body.phone_no,
        };

        var freight_resp = await common_helper.insert(Freight, reg_obj);
        if (freight_resp.status == 0) {
            logger.debug("Error = ", freight_resp.error);
            res.status(config.INTERNAL_SERVER_ERROR).json(freight_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Freight details has been added successfully", "data": freight_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});


//delete Freight details
// user/freight
router.delete('/', async (req, res) => {
    var tmp = _.map(req.body.freight_id, function (id) { return ObjectId(id) });
    let id = tmp;
    var freight_resp = await common_helper.multipledelete(Freight, id);
    if (freight_resp.status == 0) {
        logger.debug("Error = ", freight_resp.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(freight_resp);
    } else {
        logger.trace("User Interest has been inserted");
        res.json({ "message": "Freight details has been added successfully", "data": freight_resp })
    }
});


//update Freight details
// user/freight/:freight_id
router.put("/:freight_id", async (req, res) => {
    user_id = req.userInfo.id;
    var obj = {
    };
    if (req.body.registration_number) {
        obj.registration_number = req.body.registration_number;
    }
    if (req.body.name) {
        obj.name = req.body.name;
    }
    if (req.body.address) {
        obj.address = req.body.address;
    }
    if (req.body.state) {
        obj.state = req.body.state;
    }
    if (req.body.country) {
        obj.country = req.body.country;
    }
    if (req.body.phone_no) {
        obj.phone_no = req.body.phone_no;
    }
    if (req.body.receipt_email) {
        obj.receipt_email = req.body.receipt_email;
    }
    if (req.body.email) {
        obj.email = req.body.email;
    }

    var resp_data = await common_helper.update(Freight, { "user_id": new ObjectId(user_id), "_id": new ObjectId(req.params.freight_id) }, obj);
    if (resp_data.status == 0) {
        logger.error("Error occured while updating = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("Updated successfully  = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

//Freight listing
//user/freight
router.get("/", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(Freight, { "user_id": new ObjectId(user_id) }, 2);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});


//Freight details
//user/freight/:freight_id
router.get("/:freight_id", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(Freight, { "user_id": new ObjectId(user_id), "_id": new ObjectId(req.params.freight_id) }, 1);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

module.exports = router;