const User = require('../models/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



exports.Login = async (req, res) => {

    try{

        const {email, password} = req.body;
        console.log(password)
        const validUser = await User.findOne({email: email});
        if(!validUser){
            return res.status(400).json({
                message: "Email is not found"
            })
        }
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword){
            return res.status(400).json({
                message: "Incorrect Password"
            })
        } 

        const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY)

        return res.status(200).json({
            id: validUser._id,
            email: validUser.email,
            token: token
        })


    }catch(error){

        return res.status(500).json({
            "message" : "Internal server error"
        })

    }
   
}