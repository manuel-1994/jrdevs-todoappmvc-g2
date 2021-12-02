const TaskModel = require('../models/task')

const getTasks = async ()=>{
  const tasks = await TaskModel.find()
  return tasks || []
}

const getTask = async (created_by)=>{
  const task = await TaskModel.findOne({created_by}).exec()
  return task || {}
}

/* const createTask = async (title, description)=>{
  const created_by= 
  const newTask = await TaskModel.create({title, description, created_by})
} */

module.exports={
  getTasks,
  getTask
}