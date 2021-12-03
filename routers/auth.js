const express = require('express')

const auth = (app) =>{
  const router = express.Router()
  app.use('/',router)

  router.get('/login', (req, res) => {
    res.render('login')
  })

}
module.exports = auth
