const UserModel = require('../models/users')

const getUsers = async () =>{
  const users = await UserModel.find()
  return users || []
}

const getUser= async (email) =>{
  const user = await UserModel.findOne({email}).exec()
  return user || {}
}

const createUser = async (data) =>{
    const newUser = await UserModel.create(data)
    return newUser || {}
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
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}