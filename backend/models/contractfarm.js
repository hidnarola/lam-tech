//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var ContractFarmModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    property_id: { type: Number },
    property_name: { type: String },
    address: String,
    state: { type: String },
    country: String,
    region: String,
    //status: { type: String, default: "active" },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var ContractFarm = mongoose.model('contractfarm', ContractFarmModelSchema, 'contractfarm');

module.exports = ContractFarm;