const express = require('express');
const mongoose = require('mongoose');
const transfer = require('./routes/transfer');
const BankA = require('./routes/bankA')
const BankB = require('./routes/bankB')

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/transfer', transfer);
app.use('/api/bankA',BankA);
app.use('/api/bankB',BankB);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
