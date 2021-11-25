const express = require('express')
const {port} = require('./config')
const app = express()
//Middleware
app.use(express.json())

// set template engine
app.set('view engine', 'pug')

//Connection Db

//Routes
app.get('/', function (req, res) {
  res.render('home');
});
//Server Init
app.listen(port, ()=>{
  console.log(`Server up in http://localhost:${port}`);
})