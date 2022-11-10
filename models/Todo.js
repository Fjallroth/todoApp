const { Long } = require('mongodb')
const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  //added added by to schema, this will be based on the userId. Can I just use user ID instead of having a separate field?
  addedBy: {
    type: String,
    required: false
  },
  todoPriority: {
    type: String,
    required: false
  },
  todoDeadline: {
    type: Date,
    required: false
  },
  userId: {
    type: String,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Todo', TodoSchema)
