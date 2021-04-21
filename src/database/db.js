/**
 * @name db.js
 * @description 
 */

const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const userModel = require('./models/user.js');

module.exports = {
    user: {
        createUser: function(data) {
            return new userModel(...data);
        }
    }
}