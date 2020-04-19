const Image = require('../model/image')
const User = require('../model/user')
const fs = require('fs')

exports.addNewImage = async (req, res, next) => {
    const { creator } = req

    try {
        const newImage = new Image({
            imagePath: req.file.path,
            user: creator
        })
        const uploadedImage = await newImage.save()
        const user = await User.findById(creator)
        user.image = uploadedImage._id
        await user.save()
        const populatedImageDoc = await uploadedImage.populate('user').execPopulate()

        return res.status(201).json(populatedImageDoc)
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
    }
}

exports.editImage = async (req, res, next) => {
    const { creator } = req
    try {
        const image = await Image.findOne({ user: creator })

        fs.unlink(image.imagePath, err => {
            if (err) console.log(err)
        })

        image.imagePath = req.file.path
        const updatedImage = await image.save()

        res.status(201).json(updatedImage)
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
    }

}

exports.removeImage = async (req, res, next) => {
    const { creator } = req

    try {
        const user = await User.findById(creator)
        const image = await Image.findByIdAndRemove(user.image)
        const deleteImage = await user.deleteImage(user.image)

        fs.unlink(image.imagePath, err => {
            if (err) console.log(err)
        })

        res.status(201).json({ message: 'Image removed' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}