const { default: mongoose } = require('mongoose');
const bankA = require('../models/bankA');
const BankA = require('../models/bankA');

exports.createacc= async (req,res)=>{
    const{name,age,acc,balance}=req.body;
    try{
        let user = await bankA.findOne({acc});
        if(user){
           return res.status(404).json({
                message:"Already exists"
            });
        }

    user = new bankA({
        name,
        age,
        acc,
        balance
    })
    await user.save();
    res.send(user);
    }catch(err){
        res.status(404).json({
            error:"Something wrong"
        })
    }
};

exports.getacc = async(req,res)=>{
    const Fuser = req.params.id;
    try{
        const user=await BankA.findById(Fuser)
        if(!user) return res.status(404).json({message:"No acc found"});
        res.status(201).send(user);
    }catch(err){
        res.status(404).json({
            message:"Something went wrong"
        });
    }
};

