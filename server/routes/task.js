const express = require('express')
const router = express.Router()
const { isAuth } = require('../middleware/auth')

const taskController = require('../controller/task')

router.post('/addTodo', isAuth, taskController.addTodo)
router.patch('/updateTodo', isAuth, taskController.updateTodo)
router.get('/getTodos', isAuth, taskController.getTodos)
router.get('/getTodo/:id', isAuth, taskController.getTodo)
router.delete('/deleteTodo/:id', isAuth, taskController.deleteTodo)

module.exports = router