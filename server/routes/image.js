const express = require('express')
const router = express.Router()

const imageController = require('../controller/image')
const { isAuth } = require('../middleware/auth')

router.post('/addImage', isAuth, imageController.addNewImage)
router.patch('/editImage', isAuth, imageController.editImage)

module.exports = router