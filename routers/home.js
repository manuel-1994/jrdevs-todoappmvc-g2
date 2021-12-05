const express = require('express')
const { verifyToken } = require('../middleware/authValidation')
const home = (app) =>{
  const router = express.Router()
  app.use('/',router)

  router.get('/',verifyToken, (req, res) => {
    res.status(200).render('home')
  })
  
}
module.exports = home