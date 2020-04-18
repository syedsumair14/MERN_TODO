const mongoose = require('mongoose')
const { Schema } = mongoose

const imageSchema = new Schema({
    imagePath: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
})

const image = mongoose.model('image', imageSchema)
module.exports = image