const mongoose = require('mongoose');

const bankAConnection = mongoose.createConnection('mongodb://localhost:27017/BankA');
const bankBConnection =mongoose.createConnection('mongodb://localhost:27017/BankB');
// Event listeners for BankA connection
bankAConnection.on('connected', () => {
    console.log('Connected to BankA database.');
});
bankAConnection.on('error', (err) => {
    console.error('Error connecting to BankA database:', err);
});
bankAConnection.on('disconnected', () => {
    console.log('Disconnected from BankA database.');
});

// Event listeners for BankB connection
bankBConnection.on('connected', () => {
    console.log('Connected to BankB database.');
});
bankBConnection.on('error', (err) => {
    console.error('Error connecting to BankB database:', err);
});
bankBConnection.on('disconnected', () => {
    console.log('Disconnected from BankB database.');
});

process.on('SIGINT', async () => {
    await bankAConnection.close();
    await bankBConnection.close();
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
});

module.exports = { bankAConnection, bankBConnection };

