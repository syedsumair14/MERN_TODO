const express = require('express')
const router = express.Router()

const imageController = require('../controller/image')
const { isAuth } = require('../middleware/auth')

router.post('/addImage', isAuth, imageController.addNewImage)

module.exports = router