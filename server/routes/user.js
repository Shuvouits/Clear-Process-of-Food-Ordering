const express = require('express');
const {
    login, logout, passwordChange, profileUpdate, addCategory, allCategory, editCategory, updateCategory, deleteCategory, 
    categoryStatus, addOptionalItem, allOptional, editOptional, updateOptional, optionalStatus, deleteOptional, addCoupon,
    allCoupon, editCoupon, updateCoupon, couponStatus, deleteCoupon, addDelivery, allDelivery,
    editDelivery, updateDelivery, deliveryStatus, deleteDelivery, addTime, allTime, timeStatus,
    editTime, updateTime, deleteTime, addProduct, allProduct, editProduct, deleteProductImage,
    updateProductImage, updateProduct, deleteProduct, productStatus, addBlogCategory,
    allBlogCategory, editBlogCategory, updateBlogCategory, blogCategoryStatus, deleteBlogcategory,
    addBlog, allBlog, editBlog, updateBlog, blogStatus, deleteBlog
    } = require('../controllers/user.js');
const { authUser } = require('../middleware/auth.js');


const router = express.Router();

router.post('/login', login);
router.get('/logout', authUser, logout);
router.post('/password-change', authUser, passwordChange);
router.post('/profile-update', authUser, profileUpdate);


router.post('/add-category', authUser, addCategory);
router.get('/all-category',  allCategory);
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

router.post('/add-delivery', authUser, addDelivery);
router.get('/all-delivery', authUser, allDelivery);
router.get('/edit-delivery/:id', authUser, editDelivery);
router.post('/update-delivery/:id', authUser, updateDelivery);
router.post('/delivery-status/:id', authUser, deliveryStatus);
router.get('/delete-delivery/:id', authUser, deleteDelivery);

router.post('/add-time', authUser, addTime);
router.get('/all-time', authUser, allTime);
router.get('/edit-time/:id', authUser, editTime);
router.post('/time-status/:id', authUser, timeStatus);
router.post('/update-time/:id', authUser, updateTime);
router.get('/delete-time/:id', authUser, deleteTime);  

router.post('/add-product', authUser, addProduct);
router.get('/all-product', allProduct);
router.get('/edit-product/:id', authUser, editProduct);
router.get('/delete-product/:productId/image/:imageId', authUser, deleteProductImage);
router.post('/update-product-image/:id', authUser, updateProductImage);
router.post('/update-product/:id', authUser, updateProduct);
router.get('/delete-product/:id', authUser, deleteProduct);
router.post('/product-status/:id', authUser, productStatus);

router.post('/add-blog-category', authUser, addBlogCategory);
router.get('/all-blog-category', authUser, allBlogCategory);
router.get('/edit-blog-category/:id', authUser, editBlogCategory);
router.post('/update-blog-category/:id', authUser, updateBlogCategory);
router.post('/blog-category-status/:id', authUser, blogCategoryStatus);
router.get('/delete-blog-category/:id', authUser, deleteBlogcategory);

router.post('/add-blog', authUser, addBlog);
router.get('/all-blog', allBlog);
router.get('/edit-blog/:id', authUser, editBlog);
router.post('/update-blog/:id', authUser, updateBlog);
router.post('/blog-status/:id', authUser, blogStatus);
router.get('/delete-blog/:id', authUser, deleteBlog);



module.exports = router;