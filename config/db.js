const mongoose = require('mongoose')
const config = require('.')

const connection = async () =>{
  const conn = await mongoose.connect(`mongodb+srv://dbTest:${config.password}@testdev.bhqb9.mongodb.net/toDoTask`)
  console.log("Mongo DB Connected", conn.connection.host);
}

module.exports= {connection, mongoose}