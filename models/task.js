const {mongoose} = require('../config/db')
const {Schema} = mongoose

//Schema
const taskSchema = new Schema({
  title: String,
  description: String,
  created_at: String,
  created_by: String
})

//Model
const TaskModel = mongoose.model('tasks', taskSchema)

module.exports = TaskModel
