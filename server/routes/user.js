const express = require('express');
const {login, logout, passwordChange, profileUpdate, addCategory} = require('../controllers/user.js');
const { authUser } = require('../middleware/auth.js');


const router = express.Router();

router.post('/login', login);
router.get('/logout', authUser, logout);
router.post('/password-change', authUser, passwordChange);
router.post('/profile-update', authUser, profileUpdate);
router.post('/add-category', authUser, addCategory);



module.exports = router;