//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var DeathModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    death_record_no: { type: Number },
    date_of_death: { type: Date, default: Date.now },
    animal_eid: { type: String },
    anticipated_cause_of_death: { type: String },
    company_name: { type: String },
    name: { type: String },
    address: String,
    state: { type: String },
    country: String,
    email: String,
    phone_no: Number,
    confirmed_cause_of_death: { type: String },
    //status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var Death = mongoose.model('death', DeathModelSchema, 'death');

module.exports = Death;