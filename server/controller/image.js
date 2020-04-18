const Image = require('../model/image')

exports.addNewImage = async (req, res, next) => {
    const { creator } = req

    try {
        const newImage = new Image({
            imagePath: req.file.path,
            user: creator
        })
        const uploadedImage = await newImage.save()
        const populatedImageDoc = await uploadedImage.populate('user').execPopulate()
        uploadedImage.news = 'test'
        console.log(uploadedImage)
        res.status(201).json(populatedImageDoc)
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' })
    }
}