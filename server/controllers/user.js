const User = require('../models/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



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
            avater: validUser.avater,
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

