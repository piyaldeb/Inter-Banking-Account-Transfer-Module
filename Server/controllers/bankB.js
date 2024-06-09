const BankB =require('../models/bankB')

exports.getacc=async(req,res)=>{
    const user = req.params;
    try{
        const newUser = await BankB.findById(user);
        if(!newUser){
            res.status(404).json({
                message:"Not found"
            });
        }
        res.send(newUser);
    }catch(err){
        res.status(500).json({ message: "Unable to find the data", err });

    }
};