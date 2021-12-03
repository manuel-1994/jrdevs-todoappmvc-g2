const express = require('express')
const authController = require('../controllers/auth.controller')

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
        console.log(result.user);
        return res.cookie('token',result.token,{httpOnly:true})
        .status(200)
        .json({nombre:result.user.username})
      }
      return res.status(400).json(result.message)
  })

}
module.exports = auth
