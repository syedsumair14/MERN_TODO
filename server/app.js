const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
require('dotenv').config()
const app = express()

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) cb(null, true)
    else cb(null, false)
}

//server static
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use(bodyParser.json())
app.use(multer({ storage: diskStorage, fileFilter }).single('image'))

//Middleware
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

//Routes
const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task')
const imageRoutes = require('./routes/image')
app.use(userRoutes)
app.use(taskRoutes)
app.use(imageRoutes)

//Will add error middleware here


mongoose.connect(`mongodb+srv://syedsumair14:${process.env.MONGO_PASS}@mern-todo-soglz.mongodb.net/mern-todo?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => app.listen(process.env.PORT || 3000, () => console.log(`DB and Server Connected`)))