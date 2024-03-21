const express = require('express');
const {
    login, logout, passwordChange, profileUpdate, addCategory, allCategory, editCategory, updateCategory, deleteCategory, 
    categoryStatus, addOptionalItem, allOptional, editOptional, updateOptional, optionalStatus, deleteOptional, addCoupon,
    allCoupon, editCoupon, updateCoupon, couponStatus, deleteCoupon
    } = require('../controllers/user.js');
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

router.post('/add-optional-item', authUser, addOptionalItem);
router.get('/all-optional', authUser, allOptional);
router.get('/edit-optional/:id', authUser, editOptional);
router.post('/update-optional/:id', authUser, updateOptional);
router.post('/optional-status/:id', authUser, optionalStatus);
router.get('/delete-optional/:id', authUser, deleteOptional);

router.post('/add-coupon', authUser, addCoupon);
router.get('/all-coupon', authUser, allCoupon);
router.get('/edit-coupon/:id', authUser, editCoupon);
router.post('/update-coupon/:id', authUser, updateCoupon);
router.post('/coupon-status/:id', authUser, couponStatus);
router.get('/delete-coupon/:id', authUser, deleteCoupon);



module.exports = router;