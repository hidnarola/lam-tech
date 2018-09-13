//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var PurchaseInstructionModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    date_of_instruction: { type: Date, default: Date.now },
    purchase_contract_no: { type: Number },
    purchase_order_no: Number,
    adent_signed: { type: String },
    agent_email: String,
    agent_phone_no: Number,
    purchasing_stock_for: String,
    arrival_date: { type: Date, default: Date.now },
    truck_decks: Number,
    head: Number,
    average_weight_kg: { type: Number },
    average_weight_dollar: { type: Number },
    weight_range_tolerance_from: { type: Number },
    weight_range_tolerance_to: { type: Number },
    comment: { type: String },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var PurchaseInstruction = mongoose.model('purchaseInstruction', PurchaseInstructionModelSchema, 'purchaseInstruction');

module.exports = PurchaseInstruction;