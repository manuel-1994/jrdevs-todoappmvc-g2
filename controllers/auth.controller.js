const jwt = require('jsonwebtoken')
const userController = require('./users.controller')

const login = async (email, password) =>{
  console.log(email);
  const user = await userController.getUser(email)
  if(user){
    if(password === user.password){
      const token = jwt.sign({email, password}, '12345')
      return {token, user, sucess: true}
    }
  }
  return {message:'Credenciales incorrectas', sucess: false}
}

module.exports = {
  login
}