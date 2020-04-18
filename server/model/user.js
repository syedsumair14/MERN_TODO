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

userSchema.methods.deleteTodo = function (id) {
    const todo = this.todo.filter(todo => todo != id)
    this.todo = todo
    return this.save()
}

const user = mongoose.model('user', userSchema)

module.exports = user