const express = require('express')
const taskController = require('../controllers/task.controller')
const { verifyToken } = require('../middleware/authValidation')

const tasks = (app)=>{
  const router = express.Router()
  
  app.use('/task',verifyToken,router)

  router.get('/', async (req, res) =>{
    const {rol,username} = req.user
    
    const tasks = rol==="admin"
    ?await taskController.getTasks()
    :await taskController.getTasksByUser(username)
    res.status(200).json(tasks)
  })

  router.post('/', async (req, res) =>{
    const {title, description,} = req.body
    const created_at = new Date().toLocaleString()
    const created_by = req.user.username
    const newTask= await taskController.createTask(title, description,created_at,created_by)

    res.status(201).json(newTask)
  })

  router.put('/:id', async(req, res) =>{
    const id = req.params.id
    const data = req.body
    const task = await taskController.updateTask(id, data)
    res.status(200).json({oldTask: task, message: "la tarea ha sido editada exitosamente" })
  })

  router.delete('/:id', async(req,res)=>{
    const id = req.params.id
    const task = await taskController.deleteTask(id)
    res.status(200).json({deleteTask: task, message: "Tarea eliminada"})
  })
}

module.exports= tasks