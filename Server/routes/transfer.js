const express = require('express');
const {transfer} = require('../controllers/transfer');
const router = express.Router();

router.post('/get/:id',transfer);
module.exports=router;