const Joi = require('joi')
const {mongoose} = require('../config/db')
const {Schema} = mongoose

//Schema Joi
const userSchemaJoi = Joi.object({
  username: Joi.string().required().max(20).message('El limite de characteres es de 20'),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().required().min(8).message('Su contraseña debe tener min 8 characteres'),
})
//Schema
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  rol: {
    type: String,
    default: 'user'
  }
})

//model
const UserModel = mongoose.model('users', userSchema)

module.exports = {
  UserModel,
  userSchemaJoi
}