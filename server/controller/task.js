const Task = require('../model/task')
const User = require('../model/user')

exports.addTodo = async (req, res, next) => {
    const { title, description } = req.body
    const { creator } = req

    try {
        if (!creator) throw ({ err: 'Sign in to add', status: 403 })
        if (!title || !description) throw ({ err: 'Missing Fileds', status: 401 })

        const newTask = new Task({ ...req.body, creator })
        const savedTask = await newTask.save()

        if (savedTask) {
            const user = await User.findById(creator)
            user.todo.push(savedTask._id)
            await user.save()
        }
        return res.status(201).json(savedTask)

    } catch (error) {
        return res.status(error.status || 500).json({ error: error.err })
    }
}

exports.updateTodo = async (req, res, next) => {
    const { _id } = req.query

    try {
        const findTask = await Task.findById(_id)
        if (!findTask) throw { error: 'Task not found', status: 404 }

        for (let keys in req.body) {
            findTask[keys] = req.body[keys]
        }

        const updatedTask = await findTask.save()
        return res.status(201).json(updatedTask)

    } catch (error) {
        res.status(error.status || 500).json({ error: error.error || 'Something went wrong' })
    }
}

exports.getTodos = async (req, res, next) => {
    const { creator } = req

    try {
        const tasks = await Task.find({ creator })
        if (!tasks) throw { status: 404, error: 'No tasks' }

        return res.status(200).json(tasks)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.error || 'Something went wrong' })
    }
}

exports.getTodo = async (req, res, next) => {
    const { creator } = req
    const { id } = req.params

    try {
        const task = await Task.findById(id)
        console.log(task)
        if (!task) throw { status: 404, error: 'Not found' }
        return res.status(200).json(task)

    } catch (error) {
        res.status(error.status || 500).json({ error: error.error || 'Something went wrong' })
    }
}

exports.deleteTodo = async (req, res, next) => {
    const { creator } = req
    const { id } = req.params

    try {
        const deletedTask = await Task.findByIdAndRemove({ _id: id, creator })
        if (!deletedTask) throw { status: 404, error: 'Task not found' }

        const user = await User.findById(creator)
        user.deleteTodo(id)

        return res.status(200).json(deletedTask)
    } catch (error) {
        res.status(error.status || 500).json({ error: error.error || 'Something went wrong' })
    }
}