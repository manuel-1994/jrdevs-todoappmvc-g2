const express = require('express')
const usersController = require('../controllers/users.controller')

const users = (app) =>{
  const router = express.Router()

  app.use('/users', router)

  router.get('/', async (req, res)=>{
    const data = await usersController.getUsers()
    res.status(200).json(data)
  })

  router.get('/:email', async (req, res)=>{
    const email = req.params.email
    const user = await usersController.getUser(email)
    res.status(200).json(user)
  } )

  router.post('/', async (req, res) =>{
    const data = req.body
    const newUser = await usersController.createUser(data)
    res.status(201).json(newUser)
  })

  router.put('/:id', async (req, res) =>{
    const id = req.params.id
    const data= req.body
    const user = await usersController.updateUser(id,data)
    res.status(200).json(user)
  })

  router.delete('/:id', async (req, res) =>{
    const id = req.params.id
    const user = await usersController.deleteUser(id)
    res.status(200).json(user)
  })
}

module.exports = users