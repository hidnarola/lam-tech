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
var Instruction = require('../../models/purchase_instruction');
var Internal = require('../../models/purchase_internal_transfer');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add instruction details
// user/purchase/instruction
router.post('/instruction', async (req, res) => {
    var schema = {
        "date_of_instruction": {
            notEmpty: true,
            errorMessage: "Date of Instruction is required"
        },
        "purchase_contract_no": {
            notEmpty: true,
            errorMessage: "Purchase contract Number is required"
        },
        "purchase_order_no": {
            notEmpty: true,
            errorMessage: "Purchase Order Number is required"
        },
        "agent_signed": {
            notEmpty: true,
            errorMessage: "Agent Sign is required"
        },
        "agent_email": {
            notEmpty: true,
            errorMessage: "Agent Email is required"
        },
        "agent_phone_no": {
            notEmpty: true,
            errorMessage: "Agent Phone Number is required"
        },
        "purchasing_stock_for": {
            notEmpty: true,
            errorMessage: "Purchasing Stock For is required"
        },
        "arrival_date": {
            notEmpty: true,
            errorMessage: "Arrival Date is required"
        },
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var reg_obj = {
            "user_id": req.userInfo.id,
            "date_of_instruction": req.body.date_of_instruction,
            "purchase_contract_no": req.body.purchase_contract_no,
            "purchase_order_no": req.body.purchase_order_no,
            "agent_signed": req.body.agent_signed,
            "agent_email": req.body.agent_email,
            "agent_phone_no": req.body.agent_phone_no,
            "purchasing_stock_for": req.body.purchasing_stock_for,
            "arrival_date": req.body.arrival_date,
            "truck_decks": req.body.truck_decks,
            "head": req.body.head,
            "average_weight_kg": req.body.average_weight_kg,
            "average_weight_dollar": req.body.average_weight_dollar,
            "weight_range_tolerance_from": req.body.weight_range_tolerance_from,
            "weight_range_tolerance_to": req.body.weight_range_tolerance_to,
            "comment": req.body.comment,
        };

        var instruction_resp = await common_helper.insert(Instruction, reg_obj);
        if (instruction_resp.status == 0) {

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

//add internal transfer details
// user/purchase/internal_transfer
router.post('/internal_transfer', async (req, res) => {
    var user_id = req.userInfo.id;
    var schema = {
        "purchase_contract_no": {
            notEmpty: true,
            errorMessage: "Purchase Contract Number is required"
        },
        "transfer_no": {
            notEmpty: true,
            errorMessage: "Transfer Number is required"
        },
        "date_of_instruction": {
            notEmpty: true,
            errorMessage: "Date Of Instruction is required"
        },
        "date_of_arrival": {
            notEmpty: true,
            errorMessage: "Date Of Arrival is required"
        },
        "transferring_from": {
            notEmpty: true,
            errorMessage: "Transferring From is required"
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
        "property_identification_code": {
            notEmpty: true,
            errorMessage: "Property Identification Code is required"
        },
        "stock_to_be_transferred_to": {
            notEmpty: true,
            errorMessage: "Stock To be Transferred To is required"
        },
        "transfer_price": {
            notEmpty: true,
            errorMessage: "Transfer Price is required"
        },
    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var obj = {
            "user_id": user_id,
            "purchase_contract_no": req.body.purchase_contract_no,
            "transfer_no": req.body.transfer_no,
            "date_of_instruction": req.body.date_of_instruction,
            "date_of_arrival": req.body.date_of_arrival,
            "transferring_from": req.body.transferroring_from,
            "address": req.body.address,
            "state": req.body.state,
            "country": req.body.country,
            "email": req.body.email,
            "property_identification_code": req.body.property_identification_code,
            "stock_to_be_transferred_to": req.body.stock_to_be_transferrored_to,
            "transfer_price": req.body.transfer_price
        };
        var instruction_resp = await common_helper.insert(Internal, obj);
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


module.exports = router;