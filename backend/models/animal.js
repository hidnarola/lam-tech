//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var AnimalModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    date_record: { type: Date, default: Date.now },
    cow_rfid: { type: String },
    dob: { type: Date, default: Date.now },
    date_of_acquisition: { type: Date, default: Date.now },
    purchase_price: Number,
    weight: Number,
    conception: String,
    //status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var Animal = mongoose.model('animal', AnimalModelSchema, 'animal');

module.exports = Animal;