const User = require('../models/user.js')
const Category = require('../models/category.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const slugify = require('slugify');
const Optional = require('../models/optional.js');
const Coupon = require('../models/coupon.js');
const Delivery = require('../models/delivery.js')



exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;
        const validUser = await User.findOne({ email: email });
        if (!validUser) {
            return res.status(400).json({
                message: "Email is not found"
            })
        }
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(400).json({
                message: "Incorrect Password"
            })
        }

        const token = jwt.sign({ id: validUser._id }, process.env.SECRET_KEY)

        return res.status(200).json({
            id: validUser._id,
            fullName: validUser.fullName,
            email: validUser.email,
            token: token,
            avatar: validUser.avatar,
            createdAt: validUser.createdAt
        })


    } catch (error) {

        return res.status(500).json({
            "message": "Internal server error"
        })

    }

}

exports.logout = async (req, res) => {
    try {

        let tmp = req.header("Authorization");
        tmp = null
        const token = tmp;
        return res.status(200).json({
            "message": "User has been logged out"
        })

    } catch (error) {
        res.status(500).json(error)

    }

}

exports.passwordChange = async (req,res) => {
    try{

        const userId = req.user.id;
        const {oldPassword, newPassword, confirmPassword} = req.body;

        if(newPassword.length < 7){
            return res.status(400).json({
                message: 'Password length must be 8 or above character'
            })
        }

        if(newPassword !== confirmPassword){
            return res.status(400).json({
                message: 'Confirm password not matched'
            })

        }

       

        const user = await User.findById(userId);

        const checkPassword = bcrypt.compareSync(oldPassword, user.password);

        if(!checkPassword){
            return res.status(400).json({
                message : 'Your old password not matched'
            })
        }

       

        let cryptedPassword;
        if (newPassword) {
            cryptedPassword = await bcrypt.hash(newPassword, 12)
        }  

        const updateUser = await User.findByIdAndUpdate(userId, { password: cryptedPassword}, { new: true })

       

        if (!updateUser) {
            return res.status(400).json({ message: 'User not found' });
        }  

        return res.status(200).json({
            message: 'Password Updated Successfully'
        })

    }catch(error){
        console.log(error)
    }
}  

exports.profileUpdate = async(req,res)=>{
    try{

        let tmp = req.header("Authorization");
        const token = tmp ? tmp.slice(7, tmp.length) : "";
        const userId = req.user.id;
        const { fullName, email,avatar} = req.body;

      

        const updateUser = await User.findByIdAndUpdate(userId, { fullName, email, avatar}, { new: true })


        if (!updateUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({
            id: updateUser._id,
            email: updateUser.email,
            fullName: updateUser.fullName,
            avatar: updateUser.avatar,
            token: token,
            message: 'User information updated',
            createdAt: updateUser.createdAt
        })


    }catch(error){
        return res.status(500).json(error)
    }
}  

exports.addCategory = async(req,res)=> {
    try{

        const{name, avatar, status} = req.body

        const string = req.body.name;
        const slug = slugify(string);

        const customSlug = slugify(string, {
            replacement: '-',  // replace spaces with '-'
            lower: true        // convert to lowercase
          });


        const category = await new Category({
           
            name,
            avatar,
            status,
            slug: customSlug
           
        }).save();

        res.status(200).json(category)


    }catch(error){
        console.log(error)
    }
}

exports.allCategory = async(req, res) => {

    try{

        const category = await Category.find();
        return res.status(200).json(category)

    }catch(error){
        return res.status(500).json(error)
    }
    
}

exports.editCategory = async(req,res)=> {
    try{
        const categoryId = req.params.id;
       

        const data = await Category.findById(categoryId);
        return res.status(200).json(data)

        

    }catch(error){
        return (error)
    }
}

exports.updateCategory = async(req,res)=> {
    try{
        const categoryId = req.params.id;
        const {name, avatar, status, slug} = req.body;

        const updateData = await Category.findByIdAndUpdate(categoryId, { name, avatar, status, slug }, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Category not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
}

exports. deleteCategory = async(req, res)=> {
    try{
       
        const categoryId = req.params.id;
        

        const data = await Category.findOneAndDelete({_id : categoryId})

        if(!data){
            return res.status(401).json({
                message: 'No data found'
            })
        }

        return res.status(200).json({
            message: 'Data deleted successfully'
        })

    }catch(error){
        return (error)
    }
}  

exports.categoryStatus = async(req,res)=> {
    try{
        const categoryId = req.params.id;

        const data = await Category.findById(categoryId);

        let status = data.status;

        if(status === 'Active'){
            status = 'Inactive'
        }else{
            status = 'Active'
        }

        const updateData = await Category.findByIdAndUpdate(categoryId, {status:status}, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Category not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
}  


exports.addOptionalItem = async(req,res)=> {
    try{

        const{name, price, status} = req.body

        const optional = await new Optional({
           
            name,
            price,
            status,
           
        }).save();

        res.status(200).json(optional)


    }catch(error){
        console.log(error)
    }
}

exports.allOptional = async(req, res) => {

    try{

        const optional = await Optional.find();
        return res.status(200).json(optional)

    }catch(error){
        return res.status(500).json(error)
    }
    
}  

exports.editOptional = async(req,res)=> {
    try{
        const optionId = req.params.id;
        const data = await Optional.findById(optionId);
        return res.status(200).json(data)

    }catch(error){
        return (error)
    }
}  


exports.updateOptional = async(req,res)=> {
    try{
        const optionId = req.params.id;
        const {name, price, status} = req.body;

        const updateData = await Optional.findByIdAndUpdate(optionId, { name, price, status}, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
} 


exports.optionalStatus = async(req,res)=> {
    try{
        const optionId = req.params.id;

        const data = await Optional.findById({_id : optionId});

        let status = data.status;

        if(status === 'Active'){
            status = 'Inactive'
        }else{
            status = 'Active'
        }

        const updateData = await Optional.findByIdAndUpdate(optionId, {status:status}, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
}   

exports. deleteOptional = async(req, res)=> {
    try{
       
        const optionId = req.params.id;
        

        const data = await Optional.findOneAndDelete({_id : optionId})

        if(!data){
            return res.status(401).json({
                message: 'No data found'
            })
        }

        return res.status(200).json({
            message: 'Data deleted successfully'
        })

    }catch(error){
        return (error)
    }
}   


exports.addCoupon = async(req,res)=> {
    try{

        const{name, code, expireDate, discount, status} = req.body

        const coupon = await new Coupon({
           
            name,
            code,
            expireDate,
            discount,
            status
           
        }).save();

        res.status(200).json(coupon)


    }catch(error){
        console.log(error)
    }
}  



exports.allCoupon = async(req, res) => {

    try{

        const coupon = await Coupon.find();
        return res.status(200).json(coupon)

    }catch(error){
        return res.status(500).json(error)
    }
    
} 

exports.editCoupon = async(req,res)=> {
    try{
        const couponId = req.params.id;
        const data = await Coupon.findById(couponId);
        return res.status(200).json(data)

    }catch(error){
        return (error)
    }
}  


exports.updateCoupon = async(req,res)=> {
    try{
        const couponId = req.params.id;
        const {name, code, status, discount, expireDate} = req.body;

        const updateData = await Coupon.findByIdAndUpdate(couponId, { name, code, status, discount, expireDate}, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
}   

exports.couponStatus = async(req,res)=> {
    try{
        const couponId = req.params.id;

        const data = await Coupon.findById({_id : couponId});

        let status = data.status;

        if(status === 'Active'){
            status = 'Inactive'
        }else{
            status = 'Active'
        }

        const updateData = await Coupon.findByIdAndUpdate(couponId, {status:status}, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
}  


exports. deleteCoupon = async(req, res)=> {
    try{
       
        const couponId = req.params.id;
        

        const data = await Coupon.findOneAndDelete({_id : couponId})

        if(!data){
            return res.status(401).json({
                message: 'No data found'
            })
        }

        return res.status(200).json({
            message: 'Data deleted successfully'
        })

    }catch(error){
        return (error)
    }
}   


exports.addDelivery = async(req,res)=> {
    try{

        const{name, minTime, maxTime, dfee, status} = req.body

        const delivery = await new Delivery({
           
            name,
            minTime,
            maxTime,
            dfee,
            status
           
        }).save();

        res.status(200).json(delivery)


    }catch(error){
        console.log(error)
    }
}    



exports.allDelivery = async(req, res) => {

    try{

        const delivery = await Delivery.find();
        return res.status(200).json(delivery)

    }catch(error){
        return res.status(500).json(error)
    }
    
}  

exports.editDelivery = async(req,res)=> {
    try{
        const deliveryId = req.params.id;
        const data = await Delivery.findById(deliveryId);
        return res.status(200).json(data)

    }catch(error){
        return (error)
    }
}  

exports.updateDelivery = async(req,res)=> {
    try{
        const deliveryId = req.params.id;
        const {name, minTime, maxTime, dfee, status} = req.body;

        const updateData = await Delivery.findByIdAndUpdate(deliveryId, { name, minTime, maxTime, dfee, status}, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
}   


exports.deliveryStatus = async(req,res)=> {
    try{
        const deliveryId = req.params.id;

        const data = await Delivery.findById({_id : deliveryId});

        let status = data.status;

        if(status === 'Active'){
            status = 'Inactive'
        }else{
            status = 'Active'
        }

        const updateData = await Delivery.findByIdAndUpdate(deliveryId, {status:status}, { new: true })

        if (!updateData) {
            return res.status(404).json({ message: 'Data not found' });
        }

        return res.status(200).json(updateData)


    }catch(error){
        console.log(error)
    }
}  

exports. deleteDelivery = async(req, res)=> {
    try{
       
        const deliveryId = req.params.id;
        

        const data = await Delivery.findOneAndDelete({_id : deliveryId})

        if(!data){
            return res.status(401).json({
                message: 'No data found'
            })
        }

        return res.status(200).json({
            message: 'Data deleted successfully'
        })

    }catch(error){
        return (error)
    }
}  


  


