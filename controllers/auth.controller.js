const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config')
const userController = require('./users.controller')

const hashPassword = async (password) =>{
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password,salt)

  return hash
}

const login = async (email, password) =>{
  const user = await userController.getUser(email)
  if(user){
    const isPassword= await bcrypt.compare(password, user.password)
    if(isPassword){
      const token = jwt.sign({email}, config.jwt_secret)
      return {token, user, sucess: true}
    }
  }
  return {message:'Credenciales incorrectas', sucess: false}
}

const register = async (username, email, passwordOrigin) =>{
  const password = await hashPassword(passwordOrigin)
  const user = await userController.createUser({username,email,password})
  if(user){
    return {message: 'Registro exitoso', sucess: true, user}
  }
  return {message:'Error al registrar', sucess: false}
}

const addRol = async (id,rol) =>{
  const user = await userController.updateUser(id,{rol})
  
  if(user){
    return {message: 'Rol agregado', sucess: true, user}
  }
  return {message:'Error al agregar rol', sucess: false}
}

module.exports = {
  login,
  register,
  addRol
}