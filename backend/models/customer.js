//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var CustomerModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    company_registration_number: { type: Number },
    company_name: { type: String },
    company_address: String,
    company_state: { type: String },
    company_country: String,
    site_name: String,
    delivery_address: String,
    delivery_state: { type: String },
    delivery_country: String,
    representative_name: String,
    representative_title: String,
    representative_email: String,
    representative_phone_no: String,
    //status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var Customer = mongoose.model('customer', CustomerModelSchema, 'customer');

module.exports = Customer;