const express = require('express')
const taskController = require('../controllers/tasks.controller')
const { verifyToken, verifyTokenAdmin } = require('../middleware/authValidation')

const tasks = (app)=>{
  const router = express.Router()
  
  app.use('/tasks',verifyToken,router)

  router.get('/', async (req, res) =>{
    const {rol,id} = req.user
    
    const tasks = rol==="admin"
    ?await taskController.getTasks()
    :await taskController.getMyTasks(id)
    res.status(200).json(tasks)
  })

  router.get('/my_tasks',verifyTokenAdmin, async (req,res)=>{
    const {id} = req.user
    const result = await taskController.getMyTasks(id)
    res.status(200).json(result)
  })

  router.post('/', async (req, res) =>{
    const {title, description,} = req.body
    const newTask= await taskController.createTask(title, description, req.user)
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