//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var Contract = new Schema({
    sales_contract_no: { type: Number, default: null },
    contract_type: { type: String },
    date_of_contract: Date,
    buyer_approved_customer: { type: String },
    buyer_company_registration_no: { type: Number },
    buyer_address: String,
    buyer_state: { type: String },
    buyer_country: String,
    buyer_email: String,
    buyer_phone_no: Number,
    seller_company_name: { type: String },
    seller_company_registration_no: { type: Number },
    seller_address: String,
    seller_state: { type: String },
    seller_country: String,
    seller_email: String,
    seller_phone_no: Number,
    agent_approved_customer: { type: String },
    agent_name: { type: String },
    agent_address: String,
    agent_state: { type: String },
    agent_country: String,
    agent_email: String,
    agent_phone_no: Number,

});

var Cattle = new Schema({
    cattle_description: { type: String },
    cattle_weight: { type: Number },
    cattle_unit: { type: Number },
    cattle_age_from: { type: Date, default: Date.now },
    cattle_age_to: { type: Date, default: Date.now },
    muscle_score: { type: Number },
    fat_score: { type: Number },
    frame_score: { type: Number },
    dentition: String,
    assessment: { type: String },
    agreed_no_of_asserors: Number,
    quantity_head: Number,
    weighing_method: String,
    place: { type: String },
    tolerance_no: Number,
    tolerance_weight_per: Number,
    tolerance_weight_kg: Number,
    delivery_from: Date,
    delivery_to: Date,
    approved_site_of_customer: { type: String },
    delivery_address: String,
    delivery_state: { type: String },
    delivery_country: String,
    delivery_email: String,
    delivery_phone_no: Number,
    is_agent_used: { type: Boolean, default: false },
    is_agent_del_credere: { type: Boolean, default: false },
});

var Assessors = new Schema({
    name: { type: string },
    address: String,
    state: { type: String },
    country: String,
    email: String,
    phone_no: Number,
    second_name: String,
    second_address: String,
    second_state: { type: String },
    second_country: String,
    second_email: String,
    second_phone_no: Number,
    third_name: String,
    third_address: String,
    third_state: { type: String },
    third_country: String,
    third_email: String,
    third_phone_no: Number,


});

var PriceAndPayment = new Schema({
    contract_type: { type: String },
    price_kg: { type: Number },
    unit: { type: Number },
    head: { type: Number },
    agent_commission_per: { type: Number },
    agent_commission_unit: { type: Number },
    agent_commision_head: { type: Number },
    agent_commision_invoice: { type: Number },
});

var Trade = new Schema({
    rules_pdf: { type: String },
    country_trade_rules: { type: String },
});

var Execution = new Schema({
    buyer_name: { type: String },
    buyer_date: { type: Date },
    buyer_sign: { type: String },
    seller_name: { type: String },
    seller_date: { type: Date },
    seller_sign: { type: String },
    agent_name: { type: String },
    agent_date: { type: Date },
    agent_sign: { type: String },
});

var SalesContractModelSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    contract: { type: Contract },
    cattle: { type: Cattle },
    assessors: { type: Assessors },
    priceandpayment: { type: PriceAndPayment },
    trade: { type: Trade },
    other_amendment_rules: { type: String },
    execution: { type: Execution },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });


// Compile model from schema
var Sales = mongoose.model('sales', SalesContractModelSchema, 'sales');

module.exports = Sales;