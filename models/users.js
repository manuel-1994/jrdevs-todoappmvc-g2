const {mongoose} = require('../config/db')
const {Schema} = mongoose

//Schema
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  rol: String
})

//model
const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel