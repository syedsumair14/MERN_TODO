const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()

app.use(bodyParser.json())
//Middleware
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

//Routes
const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')
app.use(userRoutes)
app.use(taskRoutes)


mongoose.connect(`mongodb+srv://syedsumair14:${process.env.MONGO_PASS}@mern-todo-soglz.mongodb.net/mern-todo?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => app.listen(process.env.PORT || 3000, () => console.log(`DB and Server Connected`)))