const UserModel = require('../models/users')
const getUsers = async () =>{
  const users = await UserModel.find()
  return users || []
}

const createUser = async (data) =>{
    const newUser = await UserModel.create(data)
    return newUser || {}
}

module.exports = {
  getUsers,
  createUser
}