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

var mail_helper = require('../../helpers/mail_helper');
var common_helper = require('../../helpers/common_helper');
var Customer = require('../../models/customer');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var fs = require('fs');

//add agent details
// user/agent
router.post('/', async (req, res) => {
    var schema = {
        "email": {
            notEmpty: true,
            errorMessage: "Company Registration Number is required"
        },
        "person_name": {
            notEmpty: true,
            errorMessage: "Company Name is required"
        },

    };
    req.checkBody(schema);
    var errors = req.validationErrors();
    if (!errors) {
        var reg_obj = {
            "user_id": req.userInfo.id,
            "person_name": req.body.person_name,
            "email": req.body.email,
        };
        let mail_resp = await mail_helper.send("invitation_agent", {
            "to": req.body.email,
            "subject": "LAM"
        }, {
                "user": req.body.person_name,
                //"link": config.website_url + "/forgot_password/user/" + reset_token
                "link": "https://projects.invisionapp.com/share/A7L4RIR4BZF#/screens/308467048"
            });

        if (mail_resp.status === 0) {
            res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending mail to artist", "error": mail_resp.error });
        } else {
            res.status(config.OK_STATUS).json({ "status": 1, "message": "Invitation email has been sent to agent's email address" });
        }
    } else {
        logger.error("Validation Error = ", errors);
        res.status(config.BAD_REQUEST).json({ message: errors });
    }
});


//delete customer details
// user/customer
router.delete('/', async (req, res) => {
    var tmp = _.map(req.body.customer_id, function (id) { return ObjectId(id) });
    let id = tmp;
    var customer_resp = await common_helper.multipledelete(Customer, id);
    if (customer_resp.status == 0) {
        logger.debug("Error = ", customer_resp.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(customer_resp);
    } else {
        logger.trace("User Interest has been inserted");
        res.json({ "message": "customer details has been added successfully", "data": customer_resp })
    }
});


//update customer details
// user/customer/:customer_id
router.put("/:customer_id", async (req, res) => {
    user_id = req.userInfo.id;
    var obj = {
    };
    if (req.body.company_registration_number) {
        obj.company_registration_number = req.body.company_registration_number;
    }
    if (req.body.company_name) {
        obj.company_name = req.body.company_name;
    }
    if (req.body.company_address) {
        obj.company_address = req.body.company_address;
    }
    if (req.body.company_state) {
        obj.company_state = req.body.company_state;
    }
    if (req.body.company_country) {
        obj.company_country = req.body.company_country;
    }
    if (req.body.site_name) {
        obj.site_name = req.body.site_name;
    }
    if (req.body.delivery_address) {
        obj.delivery_address = req.body.delivery_address;
    }
    if (req.body.delivery_state) {
        obj.delivery_state = req.body.delivery_state;
    }
    if (req.body.delivery_country) {
        obj.delivery_country = req.body.delivery_country;
    }
    if (req.body.representative_name) {
        obj.representative_name = req.body.representative_name;
    }
    if (req.body.representative_title) {
        obj.representative_title = req.body.representative_title;
    }
    if (req.body.representative_email) {
        obj.representative_email = req.body.representative_email;
    }
    if (req.body.representative_phone_no) {
        obj.representative_phone_no = req.body.representative_phone_no;
    }
    var resp_data = await common_helper.update(Customer, { "user_id": new ObjectId(user_id), "_id": new ObjectId(req.params.customer_id) }, obj);
    if (resp_data.status == 0) {
        logger.error("Error occured while updating = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("Updated successfully  = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

//customer listing
//user/customer
router.get("/", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(Customer, { "user_id": new ObjectId(user_id) }, 2);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});


//customer details
//user/customer/:customer_id
router.get("/:customer_id", async (req, res) => {
    user_id = req.userInfo.id;
    var resp_data = await common_helper.find(Customer, { "user_id": new ObjectId(user_id), "_id": new ObjectId(req.params.customer_id) }, 1);
    if (resp_data.status == 0) {
        logger.error("Error occured while fetching User = ", resp_data);
        res.status(config.INTERNAL_SERVER_ERROR).json(resp_data);
    } else {
        logger.trace("User got successfully = ", resp_data);
        res.status(config.OK_STATUS).json(resp_data);
    }
});

module.exports = router;