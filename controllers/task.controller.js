const TaskModel = require('../models/task')

const getTasks = async ()=>{
  const tasks = await TaskModel.find()
  return tasks || []
}

const getTask = async (created_by)=>{
  const task = await TaskModel.findOne({created_by}).exec()
  return task || {}
}

const createTask = async (title, description, created_at, created_by)=>{
  const newTask = await TaskModel.create({title, description, created_at, created_by})
  return newTask || {}
}

const updateTask = async (id, data) =>{
  const task = await TaskModel.findByIdAndUpdate(id, data)
  return task || {}
}

const deleteTask = async (id) =>{
  const task = await TaskModel.findByIdAndDelete(id)
  return task || {}
}
module.exports={
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}