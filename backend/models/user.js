//Require Mongoose
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//Define a schema
var Schema = mongoose.Schema;

var InterestModelSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    company_name: String,
    email: { type: String, required: true, unique: true },
    enquiring_about: String,
    finance_solution: String,
    current_sales: String,
    sales_ambition: String,
    password: String,
    //phone_no: Number,
    status: { type: String, default: "deactive" },
    last_login: { type: Date },
    refresh_token: { type: String },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false });



InterestModelSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one                                
            user.password = hash;
            next();
        });
    });

});

// Compile model from schema
var Interest = mongoose.model('interest', InterestModelSchema, 'interest');

module.exports = Interest;