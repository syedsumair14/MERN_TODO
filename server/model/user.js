const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todo: [{
        type: Schema.Types.ObjectId,
        ref: 'task'
    }]
})

const user = mongoose.model('user', userSchema)

module.exports = user