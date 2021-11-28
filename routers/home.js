const express = require('express')

const home = (app) =>{
  const router = express.Router()
  app.use('/',router)

  router.get('/', (req, res) => {
    res.status(200).render('home')
  })
  
}
module.exports = home