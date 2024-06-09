const express = require('express');
const {getacc} = require('../controllers/bankB');
const router = express.Router();

router.get('/get',getacc);
module.exports=router;