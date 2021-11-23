const express = require('express')
const app = express()
const port = 4000
//Middleware
app.use(express.json())

//Connection Db

//Routes

//Server Init
app.listen(port, ()=>{
  console.log(`Server up in http://localhost:${port}`);
})