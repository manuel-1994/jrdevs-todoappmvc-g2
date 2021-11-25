const express = require('express')
const {port} = require('./config')
const app = express()
//Middleware
app.use(express.json())

//Connection Db

//Routes

//Server Init
app.listen(port, ()=>{
  console.log(`Server up in http://localhost:${port}`);
})