const mongoose = require('mongoose')

const UserSchema  = new mongoose.Schema({
    name: String,
    age: Number,
})

exports.User = mongoose.model('User', UserSchema)
