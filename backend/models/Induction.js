//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var PurchaseInstructionModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    // date_of_instruction: { type: Date, default: Date.now },
    purchase_contract: { type: String },
    purchase_order_no: Number,
    owner_name: String,
    owner_address: String,
    owner_state: { type: String },
    owner_country: String,
    owner_email: String,
    owner_phone_no: String,
    shipping_name: String,
    shipping_address: String,
    shipping_state: { type: String },
    shipping_country: String,
    shipping_email: String,
    shipping_phone_no: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var PurchaseInstruction = mongoose.model('purchaseInstruction', PurchaseInstructionModelSchema, 'purchaseInstruction');

module.exports = PurchaseInstruction;