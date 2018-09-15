//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var DeliveryModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    // date_of_instruction: { type: Date, default: Date.now },
    consignment_no: Number,
    delivering_against_contract: String,
    shipping_from_name: String,
    shipping_from_address: String,
    shipping_from_state: { type: String },
    shipping_from_country: String,
    shipping_from_email: String,
    shipping_from_phone_no: Number,
    shipping_to_name: String,
    shipping_to_address: String,
    shipping_to_state: { type: String },
    shipping_to_country: String,
    shipping_to_email: String,
    shipping_to_phone_no: Number,
    buyer_name: String,
    buyer_address: String,
    buyer_state: { type: String },
    buyer_country: String,
    buyer_email: String,
    buyer_phone_no: Number,
    seller_name: String,
    seller_address: String,
    seller_state: { type: String },
    seller_country: String,
    seller_email: String,
    seller_phone_no: Number,
    carrier_name: String,
    carrier_address: String,
    carrier_state: { type: String },
    carrier_country: String,
    carrier_email: String,
    carrier_phone_no: Number,
    driver_name: String,
    driver_email: String,
    driver_phone_no: Number,
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });

// Compile model from schema
var Delivery = mongoose.model('delivery', DeliveryModelSchema, 'delivery');

module.exports = Delivery;