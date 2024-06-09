const BankA = require("../models/bankA");
const BankB = require("../models/bankB");
// Function to generate random account number
const generateRandomAcc = () => {
    return Math.floor(Math.random() * 1000000000); // Adjust as necessary for account number format
};

exports.transfer=async(req,res)=>{
    const user = req.params.id;
    try{
        const BankAUser = await BankA.findById(user);

        if(!user) return res.status(404).json({
            message:"Not found"
        });

        const newAcc = generateRandomAcc();
        const newUser =new BankB({
            name:BankAUser.name,
            age: BankAUser.age,
            acc:newAcc,
            refacc:BankAUser.acc,
            balance:BankAUser.balance
        });
        await newUser.save();
        // Remove specified fields from the user in BankA
        BankAUser.age = undefined;
        BankAUser.balance = undefined;
        BankAUser.transferMessage="Account has been shifted to the another bank"
        await BankAUser.save();
        res.status(200).json({ message: "Data transferred successfully from BankA to BankB" });

    }catch (error) {
        res.status(500).json({ message: "Error transferring data", error });
    }
    
};