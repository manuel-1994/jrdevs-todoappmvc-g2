const express = require('express')
const taskController = require('../controllers/task.controller')

const tasks = (app)=>{
  const router = express.Router()
  app.use('/task',router)

  router.get('/', async (req, res) =>{
    const tasks = await taskController.getTasks()
    res.status(200).json(tasks)
  })

  router.get('/:created_by', async (req, res) =>{
    const created_by = req.params.created_by 
    const task = await taskController.getTask(created_by)
    res.status(200).json(task)
  })
}

module.exports= tasks