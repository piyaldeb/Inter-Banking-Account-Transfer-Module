const express = require('express');
const {createacc,getacc} = require('../controllers/bankA')
const router = express.Router();

router.post('/create',createacc);
router.get('/get/:id',getacc);

module.exports=router;