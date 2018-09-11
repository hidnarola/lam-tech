var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');
var router = express.Router();
var config = require('../config');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var moment = require('moment');
var _ = require('underscore');

var logger = config.logger;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var async = require('async');
var mail_helper = require('./../helpers/mail_helper');
const saltRounds = 10;
var common_helper = require('./../helpers/common_helper')
var User = require('../models/user')


// Add user interest
router.post('/user_interest', async (req, res) => {
  var schema = {
    "first_name": {
      notEmpty: true,
      errorMessage: "First Name is required"
    },
    "last_name": {
      notEmpty: true,
      errorMessage: "Lst Name is required"
    },
    "company_name": {
      notEmpty: true,
      errorMessage: "Company Name is required"
    },
    "email": {
      notEmpty: true,
      errorMessage: "Email is required"
    },
    "finance_solution": {
      notEmpty: true,
      errorMessage: "Finance Solution is required"
    },
    "current_sales": {
      notEmpty: true,
      errorMessage: "Current sales is required"
    },
    "sales_ambition": {
      notEmpty: true,
      errorMessage: "Sales Ambition is required"
    },
    "enquiring_about": {
      notEmpty: true,
      errorMessage: "Enquiry About is required"
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var reg_obj = {
      "email": req.body.email,
      "last_name": req.body.last_name,
      "company_name": req.body.company_name,
      "first_name": req.body.first_name,
      "email": req.body.email,
      "finance_solution": req.body.finance_solution,
      "enquiring_about": req.body.enquiring_about,
      "sales_ambition": req.body.sales_ambition,
      "current_sales": req.body.current_sales
    };

    let user = await common_helper.find(User, { "email": req.body.email }, 1)
    if (user.status === 2) {
      var interest_resp = await common_helper.insert(User, reg_obj);
      if (interest_resp.status == 0) {
        logger.debug("Error = ", interest_resp.error);
        res.status(config.INTERNAL_SERVER_ERROR).json(interest_resp);
      } else {
        logger.trace("User Interest has been inserted");
        res.json({ "message": "User interest has been added Successfully", "data": interest_resp })
      }
    } else {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Your email already exist" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});




// set password

router.post('/set_password', async (req, res) => {
  var schema = {
    "email": {
      notEmpty: true,
      errorMessage: "Email is required"
    },
    "password": {
      notEmpty: true,
      errorMessage: "password is required"
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var reg_obj = {
    };
    let user = await common_helper.find(User, { "email": req.body.email }, 1)
    if (user.status === 1) {
      user.data.password = req.body.password;
      if (user.data.status == "active") {
        var interest_resp = await common_helper.insert(User, user.data);
        if (interest_resp.status == 0) {
          logger.debug("Error = ", interest_resp.error);
          res.status(config.INTERNAL_SERVER_ERROR).json(interest_resp);
        } else {
          res.json({ "data": interest_resp })
        }
      }
      else {
        res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Your request has not been accepted" });
      }
    } else {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Your email doesn't exist" });
    }
  } else {
    logger.error("Validation Error = ", errors);
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});



// user login
router.post('/user_login', async (req, res) => {
  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" }
    },
    'password': {
      notEmpty: true,
      errorMessage: "password is required."
    },
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    let login_resp = await common_helper.find(User, { "email": req.body.email }, 1)
    if (login_resp.status === 0) {
      logger.trace("Login checked resp = ", login_resp);
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Something went wrong while finding user", "error": login_resp.error });
    } else if (login_resp.status === 1) {
      logger.trace("valid token. Generating token");
      if (login_resp.data.status == "active") {
        if (bcrypt.compareSync(req.body.password, login_resp.data.password) && req.body.email == login_resp.data.email) {
          var refreshToken = jwt.sign({ id: login_resp.data._id }, config.REFRESH_TOKEN_SECRET_KEY, {});
          let update_resp = await common_helper.update(User, { "_id": login_resp.data._id }, { "refresh_token": refreshToken, "last_login": Date.now() });
          var LoginJson = { id: login_resp.data._id, email: login_resp.email, role: "data" };
          var token = jwt.sign(LoginJson, config.ACCESS_TOKEN_SECRET_KEY, {
            expiresIn: config.ACCESS_TOKEN_EXPIRE_TIME
          });
          delete login_resp.data.status;
          delete login_resp.data.password;
          delete login_resp.data.refresh_token;
          delete login_resp.data.last_login_date;
          delete login_resp.data.created_at;

          logger.info("Token generated");
          res.status(config.OK_STATUS).json({ "status": 1, "message": "Logged in successful", "data": login_resp.data, "token": token, "refresh_token": refreshToken });
        }
        else {
          res.status(config.BAD_REQUEST).json({ "status": 0, "message": "Invalid email address or password" });
        }
      } else {
        res.status(config.BAD_REQUEST).json({ message: "You Are Account is not active" });
      }
    } else {
      res.status(config.BAD_REQUEST).json({ message: "Your email is not registered" });
    }
  }
  else {
    res.status(config.BAD_REQUEST).json({ message: "invalid email" });
  }
});



//forgot password

router.post('/user_forgot_password', async (req, res) => {
  var schema = {
    'email': {
      notEmpty: true,
      errorMessage: "Email is required.",
      isEmail: { errorMessage: "Please enter valid email address" }
    }
  };
  req.checkBody(schema);
  var errors = req.validationErrors();
  if (!errors) {
    var resp = await common_helper.find(User, { "email": req.body.email }, 1)
    if (resp.status === 0) {
      res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error while finding artist" });
    } else if (resp.status === 2) {
      res.status(config.BAD_REQUEST).json({ "status": 0, "message": "No user available with given email" });
    } else {
      // Send mail on user's email address
      var reset_token = Buffer.from(jwt.sign({ "user_id": resp.data._id }, config.ACCESS_TOKEN_SECRET_KEY, {
        expiresIn: 60 * 60 * 2 // expires in 2 hour
      })).toString('base64');

      let mail_resp = await mail_helper.send("reset_password", {
        "to": resp.data.email,
        "subject": "LAM"
      }, {
          "reset_link": config.website_url + "/forgot_password/user/" + reset_token
        });

      if (mail_resp.status === 0) {
        res.status(config.INTERNAL_SERVER_ERROR).json({ "status": 0, "message": "Error occured while sending mail to artist", "error": mail_resp.error });
      } else {
        res.status(config.OK_STATUS).json({ "status": 1, "message": "Reset link has been sent on your email address" });
      }
    }
  }
  else {
    res.status(config.BAD_REQUEST).json({ message: errors });
  }
});

module.exports = router;
