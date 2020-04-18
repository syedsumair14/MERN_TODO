const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
}, { timestamps: true })

const task = mongoose.model('task', taskSchema)

module.exports = task

