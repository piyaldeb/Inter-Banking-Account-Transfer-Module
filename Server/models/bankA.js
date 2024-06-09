const mongoose = require('mongoose');
const { bankAConnection } = require('./db');

const bankASchema = new mongoose.Schema({
    name:{
        type:String,
    },
    age:{
        type:Date,
    },
    acc:{
        type:Number,
    },
    balance:{
        type:Number,
        default:0
    },
    transferMessage:{
        type:String
    }

});
// Create and export BankA model using bankAConnection
const BankA = bankAConnection.model('BankA', bankASchema);
module.exports = BankA; 