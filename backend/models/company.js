//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var CompanyModelSchema = new Schema({
    registration_number: { type: Number },
    name: { type: String },
    address: String,
    state: { type: String },
    country: String,
    email: String,
    phone_no: Number,
    //status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var Company = mongoose.model('company', CompanyModelSchema, 'company');

module.exports = Company;