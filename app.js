const express = require('express')
const { connection } = require('./config/db')
const {port} = require('./config')
const auth = require('./routers/auth')
const home = require('./routers/home')
const users = require('./routers/users')
const app = express()

//Middleware
app.use(express.static('public'));
app.use(express.json())

// set template engine
app.set('view engine', 'pug')

//Connection Db
connection()
//Routes
home(app)
auth(app)
users(app)

//Server Init
app.listen(port, () => {
  console.log(`Server up in http://localhost:${port}`);
})
