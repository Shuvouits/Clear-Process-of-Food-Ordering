const express = require('express');
const {login, logout, passwordChange, profileUpdate, addCategory, allCategory, editCategory, updateCategory, deleteCategory, categoryStatus} = require('../controllers/user.js');
const { authUser } = require('../middleware/auth.js');


const router = express.Router();

router.post('/login', login);
router.get('/logout', authUser, logout);
router.post('/password-change', authUser, passwordChange);
router.post('/profile-update', authUser, profileUpdate);
router.post('/add-category', authUser, addCategory);
router.get('/all-category', authUser, allCategory);

router.get('/edit-category/:id', authUser, editCategory);
router.post('/update-category/:id', authUser, updateCategory);
router.get('/delete-category/:id', authUser, deleteCategory);
router.post('/category-status/:id', authUser, categoryStatus);



module.exports = router;