const express = require('express');
const {login, logout, passwordChange, profileUpdate, addCategory, allCategory} = require('../controllers/user.js');
const { authUser } = require('../middleware/auth.js');


const router = express.Router();

router.post('/login', login);
router.get('/logout', authUser, logout);
router.post('/password-change', authUser, passwordChange);
router.post('/profile-update', authUser, profileUpdate);
router.post('/add-category', authUser, addCategory);
router.get('/all-category', authUser, allCategory);



module.exports = router;