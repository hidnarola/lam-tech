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
var ContractFarm = require('../../models/contractfarm');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add contract details
// user/contract
router.post('/', async (req, res) => {
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

        var farm_resp = await common_helper.insert(ContractFarm, reg_obj);
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


//delete contract details
// user/contract
router.delete('/', async (req, res) => {
    var tmp = _.map(req.body.farm_id, function (id) { return ObjectId(id) });
    let id = tmp;
    var farm_resp = await common_helper.multipledelete(ContractFarm, id);
    if (farm_resp.status == 0) {
        logger.debug("Error = ", farm_resp.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(farm_resp);
    } else {
        logger.trace("User Interest has been inserted");
        res.json({ "message": "Farm details has been added successfully", "data": farm_resp })
    }
});


//update contract details
// user/contract/:contract_id
router.put("/:contract_id", async (req, res) => {
    user_id = req.userInfo.id;
    var obj = {
    };
    if (req.body.property_id) {
        obj.property_id = req.body.property_id;
    }
    if (req.body.property_name) {
        obj.property_name = req.body.property_name;
    }
    if (req.body.state) {
        obj.state = req.body.state;
    }
    if (req.body.country) {
        obj.country = req.body.country;
    }
    if (req.body.address) {
        obj.address = req.body.address;
    }
    if (req.body.region) {
        obj.region = req.body.region;
    }
    var resp_data = await common_helper.update(ContractFarm, { "user_id": new ObjectId(user_id), "_id": new ObjectId(req.params.contract_id) }, obj);
    if (resp_data.status == 0) {
        logger.error("Error occured while updating = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("Updated successfully  = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

//contract listing
//user/contract
router.get("/", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(ContractFarm, { "user_id": new ObjectId(user_id) }, 2);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});


//contract details
//user/contract/:contract_id
router.get("/:farm_id", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(ContractFarm, { "user_id": new ObjectId(user_id), "_id": new ObjectId(req.params.farm_id) }, 1);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});
module.exports = router;