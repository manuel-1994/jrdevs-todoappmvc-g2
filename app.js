const express = require('express')
const {port} = require('./config')
const auth = require('./routers/auth')
const home = require('./routers/home')
const app = express()

//Middleware
app.use(express.static('public'));
app.use(express.json())

// set template engine
app.set('view engine', 'pug')

//Connection Db

//Routes
home(app)
auth(app)

//Server Init
app.listen(port, () => {
  console.log(`Server up in http://localhost:${port}`);
})
