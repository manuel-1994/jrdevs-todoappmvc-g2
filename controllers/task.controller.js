const TaskModel = require('../models/Task')

const getTasks = async ()=>{
  const tasks = await TaskModel.find()
  return tasks || []
}

const getTasksByUser = async (created_by)=>{
  const tasks = await TaskModel.find({created_by})
  return tasks || []
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
  getTasksByUser,
  createTask,
  updateTask,
  deleteTask
}