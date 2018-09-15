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


var Induction = require('../../models/induction');
var Animal = require('../../models/animal');
var common_helper = require('../../helpers/common_helper');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');



//add internal transfer details
// user/induction/induction_summary
router.post('/induction_summary', async (req, res) => {
    var user_id = req.userInfo.id;
    var schema = {
        "purchase_contract": {
            notEmpty: true,
            errorMessage: "Purchase Contract  is required"
        },
        "purchase_order_no": {
            notEmpty: true,
            errorMessage: "Purchase Order Number is required"
        },
        "owner_name": {
            notEmpty: true,
            errorMessage: "Owner Name is required"
        },
        "owner_address": {
            notEmpty: true,
            errorMessage: "Owner Address is required"
        },
        "owner_state": {
            notEmpty: true,
            errorMessage: "Owner State is required"
        },
        "owner_country": {
            notEmpty: true,
            errorMessage: "Owner is required"
        },
        "owner_email": {
            notEmpty: true,
            errorMessage: "Owner Email is required"
        },
        "owner_phone_no": {
            notEmpty: true,
            errorMessage: "Owner Phone Number is required"
        },
        "shipping_name": {
            notEmpty: true,
            errorMessage: "Shipping Name is required"
        },
        "shipping_email": {
            notEmpty: true,
            errorMessage: "Shipping Email is required"
        },
        "shipping_phone_no": {
            notEmpty: true,
            errorMessage: "Shipping phone Number is required"
        },
        "shipping_state": {
            notEmpty: true,
            errorMessage: "Shipping State is required"
        },
        "shipping_address": {
            notEmpty: true,
            errorMessage: "Shipping Address is required"
        },
        "shipping_country": {
            notEmpty: true,
            errorMessage: "Shipping Country is required"
        },
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var obj = {
            "user_id": user_id,
            "purchase_contract": req.body.purchase_contract,
            "purchase_order_no": req.body.purchase_order_no,
            "owner_name": req.body.owner_name,
            "owner_address": req.body.owner_address,
            "owner_state": req.body.owner_state,
            "owner_country": req.body.owner_country,
            "owner_email": req.body.owner_email,
            "owner_phone_no": req.body.owner_phone_no,
            "shipping_name": req.body.shipping_name,
            "shipping_address": req.body.shipping_address,
            "shipping_state": req.body.shipping_state,
            "shipping_country": req.body.shipping_country,
            "shipping_email": req.body.shipping_email,
            "shipping_phone_no": req.body.shipping_phone_no
        };
        var instruction_resp = await common_helper.insert(Induction, obj);
        if (instruction_resp.status == 0) {
            logger.debug("Error = ", instruction_resp.error);
            res.status(config.INTERNAL_SERVER_ERROR).json(instruction_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Instruction details has been added successfully", "data": instruction_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});

//add animal details
// user/induction/animal
router.post('/animal', async (req, res) => {
    var schema = {
        "date_record": {
            notEmpty: true,
            errorMessage: "Date of Record is required"
        },
        "cow_rfid": {
            notEmpty: true,
            errorMessage: "Animal RFID Number is required"
        },
        "dob": {
            notEmpty: true,
            errorMessage: "Date Of Birth is required"
        },
        "date_of_acquisition": {
            notEmpty: true,
            errorMessage: "Date Of Acquisition is required"
        },
        "purchase_price": {
            notEmpty: true,
            errorMessage: "Purchase Price is required"
        },
        "weight": {
            notEmpty: true,
            errorMessage: "Weight is required"
        },
        "conception": {
            notEmpty: true,
            errorMessage: "Conception is required"
        },

    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var obj = {
            "user_id": req.userInfo.id,
            "date_record": req.body.date_record,
            "cow_rfid": req.body.cow_rfid,
            "dob": req.body.dob,
            "date_of_acquisition": req.body.date_of_acquisition,
            "purchase_price": req.body.purchase_price,
            "weight": req.body.weight,
            "conception": req.body.conception,
        };
        var animal_resp = await common_helper.insert(Animal, obj);
        if (animal_resp.status == 0) {
            res.status(config.INTERNAL_SERVER_ERROR).json(animal_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Animal details has been added successfully", "data": animal_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});
module.exports = router;