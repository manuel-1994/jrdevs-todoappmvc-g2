const TaskModel = require('../models/Tasks')

const getTasks = async ()=>{
  const tasks = await TaskModel.find()
  if(tasks.length>0){
    return {data: tasks, success:true}
  }
  return {data:[], success: false, message:'No se contraron tareas disponibles'}
}

const getMyTasks = async (user_id)=>{
  const tasks = await TaskModel.find({user_id})
  return tasks || []
}


const createTask = async (title, description, user)=>{
  const created_at = new Date().toLocaleString()
  const newTask = await TaskModel.create({title, description,created_at, user_id:user.id})
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
  getMyTasks,
  createTask,
  updateTask,
  deleteTask
}