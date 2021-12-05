const express = require('express')
const authController = require('../controllers/auth.controller')
const {verifyTokenAdmin} = require('../middleware/authValidation')

const auth = (app) =>{
  const router = express.Router()
  app.use('/',router)

  router.get('/login', (req, res) => {
    res.render('login')
  })

  router.post('/login', async (req, res)=>{
      const {email, password} = req.body
      const result = await authController.login(email, password)
      if(result.sucess){
        return res.cookie('token',result.token,{httpOnly:true})
        .status(200)
        .json({username:result.user.username})
      }
      return res.status(400).json(result.message)
  })

  router.post('/signup', async (req, res)=>{
    const {username, email, password} = req.body
    const result = await authController.register(username,email,password)
    if(result.sucess){
      return res.status(201).json({user: result.user, message: result.message})
    }
    return res.status(400).json(result.message)
  })

  router.put('/rol/:id',verifyTokenAdmin, async (req, res)=>{
    const {rol}= req.body
    const id = req.params.id
    const result = await authController.addRol(id,rol)

    if(result.sucess){
      return res.status(200).json({user: result.user.username, message: result.message})
    }
    return res.status(400).json(result.message)
  })
}
module.exports = auth
