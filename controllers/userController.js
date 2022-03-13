const User = require('../models/User')
const CryptoJs = require('crypto-js')

class UserController{
    static loginUser = async(req, res) =>{
        const user = await User.findOne({email: req.body.email})
        if(user) return res.status(400).json('User already exists. Please try again')
        const login = new User({
            username: req.body.username, 
            email: req.body.email, 
            password: CryptoJs.AES.encrypt.toString()})
        try {
            login.save()
            return res.status(201).json(login)
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}

module.exports = UserController