const mongoose = require('mongoose')
const config = require('.')

const connection = async () =>{
  const conn = await mongoose.connect(`mongodb+srv://${config.username}:${config.password}@${config.host}/toDoTask`)
  console.log("Mongo DB Connected", conn.connection.host);
}

module.exports= {connection, mongoose}