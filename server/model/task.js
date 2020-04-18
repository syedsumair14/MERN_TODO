const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: false
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })

const task = mongoose.model('task', taskSchema)

module.exports = task