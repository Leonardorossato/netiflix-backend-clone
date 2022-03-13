const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName : { type : String, required: true },
    email : { type : String, required: true, unique: true },
    password : { type : String, required: true},
    profilePicture : { type : String, default: ''},
    isAdmin : {type : Boolean, default: false}
}, {timestamps: true})

const User = new mongoose.model('users', userSchema)

module.exports = User