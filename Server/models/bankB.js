const mongoose = require('mongoose');
const { bankBConnection } = require('./db');

const bankBSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    age:{
        type:Date,
        
    },
    acc:{
        type:Number,
    },
    refacc:{
        type:Number,
        default:0
    },
    balance:{
        type:Number,
        default:0
    }
    


});
// Create and export BankB model using bankBConnection
const BankB = bankBConnection.model('BankB', bankBSchema);
module.exports = BankB;