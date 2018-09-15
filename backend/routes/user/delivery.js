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

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

var Delivery = require('../../models/delivery');
var common_helper = require('../../helpers/common_helper');


//add Consignment details
// user/delivery
router.post('/', async (req, res) => {
    var user_id = req.userInfo.id;
    var schema = {
        "consignment_no": {
            notEmpty: true,
            errorMessage: "Consignment Number is required"
        },
        "delivering_against_contract": {
            notEmpty: true,
            errorMessage: "Delivering Against COntract is required"
        },
        "shipping_from_name": {
            notEmpty: true,
            errorMessage: "Shipping From Name is required"
        },
        "shipping_from_address": {
            notEmpty: true,
            errorMessage: "Shipping From Address is required"
        },
        "shipping_from_state": {
            notEmpty: true,
            errorMessage: "Shipping From State is required"
        },
        "shipping_from_country": {
            notEmpty: true,
            errorMessage: "Shipping From Countryis required"
        },
        "shipping_from_email": {
            notEmpty: true,
            errorMessage: "Shipping From Email is required"
        },
        "shipping_from_phone_no": {
            notEmpty: true,
            errorMessage: "Shipping From Phone Number is required"
        },
        "shipping_to_name": {
            notEmpty: true,
            errorMessage: "Shipping To Name is required"
        },
        "shipping_to_email": {
            notEmpty: true,
            errorMessage: "Shipping To Email is required"
        },
        "shipping_to_phone_no": {
            notEmpty: true,
            errorMessage: "Shipping To phone Number is required"
        },
        "shipping_to_state": {
            notEmpty: true,
            errorMessage: "Shipping To State is required"
        },
        "shipping_to_address": {
            notEmpty: true,
            errorMessage: "Shipping To Address is required"
        },
        "shipping_to_country": {
            notEmpty: true,
            errorMessage: "Shipping To Country is required"
        },
        "buyer_name": {
            notEmpty: true,
            errorMessage: "Buyer Name is required"
        },
        "buyer_email": {
            notEmpty: true,
            errorMessage: "Buyer Email is required"
        },
        "buyer_phone_no": {
            notEmpty: true,
            errorMessage: "Buyer phone Number is required"
        },
        "buyer_state": {
            notEmpty: true,
            errorMessage: "Buyer State is required"
        },
        "buyer_address": {
            notEmpty: true,
            errorMessage: "Buyer Address is required"
        },
        "buyer_country": {
            notEmpty: true,
            errorMessage: "Buyer Country is required"
        },
        "seller_name": {
            notEmpty: true,
            errorMessage: "Seller Name is required"
        },
        "seller_email": {
            notEmpty: true,
            errorMessage: "Seller Email is required"
        },
        "seller_phone_no": {
            notEmpty: true,
            errorMessage: "Seller phone Number is required"
        },
        "seller_state": {
            notEmpty: true,
            errorMessage: "Seller State is required"
        },
        "seller_address": {
            notEmpty: true,
            errorMessage: "Seller Address is required"
        },
        "seller_country": {
            notEmpty: true,
            errorMessage: "Seller Country is required"
        },
        "carrier_name": {
            notEmpty: true,
            errorMessage: "Carrier Name is required"
        },
        "carrier_email": {
            notEmpty: true,
            errorMessage: "Carrier Email is required"
        },
        "carrier_phone_no": {
            notEmpty: true,
            errorMessage: "Carrier phone Number is required"
        },
        "carrier_state": {
            notEmpty: true,
            errorMessage: "Carrier State is required"
        },
        "carrier_address": {
            notEmpty: true,
            errorMessage: "Carrier Address is required"
        },
        "carrier_country": {
            notEmpty: true,
            errorMessage: "Carrier Country is required"
        },
        "driver_name": {
            notEmpty: true,
            errorMessage: "Driver Name is required"
        },
        "driver_email": {
            notEmpty: true,
            errorMessage: "Driver Email is required"
        },
        "driver_phone_no": {
            notEmpty: true,
            errorMessage: "Driver phone Number is required"
        },
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var obj = {
            "user_id": user_id,
            "consignment_no": req.body.consignment_no,
            "delivering_against_contract": req.body.delivering_against_contract,
            "shipping_from_name": req.body.shipping_from_name,
            "shipping_from_address": req.body.shipping_from_address,
            "shipping_from_state": req.body.shipping_from_state,
            "shipping_from_country": req.body.shipping_from_country,
            "shipping_from_email": req.body.shipping_from_email,
            "shipping_from_phone_no": req.body.owner_phone_no,
            "shipping_to_name": req.body.shipping_to_name,
            "shipping_to_address": req.body.shipping_to_address,
            "shipping_to_state": req.body.shipping_to_state,
            "shipping_to_country": req.body.shipping_to_country,
            "shipping_to_email": req.body.shipping_to_email,
            "shipping_to_phone_no": req.body.shipping_to_phone_no,
            "buyer_name": req.body.buyer_name,
            "buyer_address": req.body.buyer_address,
            "buyer_state": req.body.buyer_state,
            "buyer_country": req.body.buyer_country,
            "buyer_email": req.body.buyer_email,
            "buyer_phone_no": req.body.buyer_phone_no,
            "seller_name": req.body.seller_name,
            "seller_address": req.body.seller_address,
            "seller_state": req.body.seller_state,
            "seller_country": req.body.seller_country,
            "seller_email": req.body.seller_email,
            "seller_phone_no": req.body.seller_phone_no,
            "carrier_name": req.body.carrier_name,
            "carrier_address": req.body.carrier_address,
            "carrier_state": req.body.carrier_state,
            "carrier_country": req.body.carrier_country,
            "carrier_email": req.body.carrier_email,
            "carrier_phone_no": req.body.carrier_phone_no,
            "driver_name": req.body.driver_name,
            "driver_email": req.body.driver_email,
            "driver_phone_no": req.body.driver_phone_no
        };
        var instruction_resp = await common_helper.insert(Delivery, obj);
        if (instruction_resp.status == 0) {
            logger.debug("Error = ", instruction_resp.error);
            res.status(config.INTERNAL_SERVER_ERROR).json(instruction_resp);
        } else {
            logger.trace("User Interest has been inserted");
            res.json({ "message": "Consignment details has been added successfully", "data": instruction_resp })
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});



//Delivery listing
//user/delivery
router.get("/", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(Delivery, { "user_id": new ObjectId(user_id) }, 2);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

module.exports = router;