const express = require('express');
const {Login} = require('../controllers/user.js')

const router = express.Router();

router.post('/login', Login)


module.exports = router;