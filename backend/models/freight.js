//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var FreightModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    registration_number: { type: Number },
    name: { type: String },
    address: String,
    state: { type: String },
    country: String,
    email: String,
    receipt_email: String,
    phone_no: Number,
    //status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var Freight = mongoose.model('freight', FreightModelSchema, 'freight');

module.exports = Freight;