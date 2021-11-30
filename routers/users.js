const express = require('express')
const usersController = require('../controllers/users.controller')

const users = (app) =>{
  const router = express.Router()

  app.use('/users', router)

  router.get('/', async (req, res)=>{
    const data = await usersController.getUsers()
    res.status(200).json(data)
  })

  router.post('/', async (req, res) =>{
    const data = req.body
    const newUser = await usersController.createUser(data)
    res.status(201).json(newUser)
  })
}

module.exports = users