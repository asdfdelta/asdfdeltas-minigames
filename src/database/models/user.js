//MongoDB User Model

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type: String, required: false, unique: true },
    password: { type: String, require: true, unique: false }
});

/*
telSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.created_at = currentDate;
    next();
});*/

var model = mongoose.model('user', userSchema);

module.exports = model;