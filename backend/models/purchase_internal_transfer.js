//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var PurchaseInternalTransferModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    purchase_contract_no: { type: Number },
    transfer_no: { type: Number },
    date_of_instruction: { type: Date, default: Date.now },
    date_of_arrival: { type: Date, default: Date.now },
    transferring_from: String,
    address: String,
    state: { type: String },
    country: String,
    email: String,
    property_identification_code: Number,
    stock_to_be_transferred_to: String,
    transfer_price: Number,
    file: String,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var PurchaseIn = mongoose.model('purchaseInternal', PurchaseInternalTransferModelSchema, 'purchaseInternal');

module.exports = PurchaseIn;