const {UserModel, userSchemaJoi} = require('../models/Users')

const getUsers = async () =>{
  const users = await UserModel.find()
  return users || []
}

const getUser= async ({email, username}) => {
  const user = await UserModel.findOne(email?{email}:{username}).exec()
  return user
}

const validateUser = async (data) =>{
  const validate = userSchemaJoi.validate(data)
  if(validate.error){
    return {data:validate.value, succes: false, message: validate.error.details[0].message}
  }
  const isEmail = await getUser({email:data.email})
  if(isEmail){
    return {data:validate.value, success: false, message: "El email ya existe"}
  }
  const isUsername = await getUser({username:data.username})
  if(isUsername){
    return {data:validate.value, success: false, message: "El usuario ya existe"}
  }
  return {data:validate.value, success: true, message: "Usuario validado"}
}

const createUser = async (data) =>{
  const userSave = await UserModel.create(data)
  return {data: userSave, success: true, message: 'Registro exitoso' }
}

const updateUser = async (id,data) =>{
  const user = await UserModel.findByIdAndUpdate(id,data)
  return user || {}
}

const deleteUser = async (id) =>{
  const user = await UserModel.findByIdAndDelete(id)
  return user || {}
}

module.exports = {
  validateUser,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}