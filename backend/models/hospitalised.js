//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var HospitalisedModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    hospital_record_no: { type: Number },
    date_of_created: { type: Date },
    animal_eid: { type: Number },
    weight: { type: Number },
    temperature: Number,
    health_issue: { type: String },
    company_name: { type: String },
    name: { type: String },
    address: String,
    state: { type: String },
    country: String,
    email: String,
    phone_no: Number,
    cause_of_sickness: String,
    action_to_be_taken: String,
    estimate_start_date: { type: Date, default: Date.now },
    estimate_end_date: { type: Date, default: Date.now },


    //status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var Hospitalised = mongoose.model('hospitalised', HospitalisedModelSchema, 'hospitalised');

module.exports = Hospitalised;