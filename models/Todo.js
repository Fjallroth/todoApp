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
    required: true
  },
  //added date added to the schema, this will be based on the time it was added
  dateAdded: {
    type: Date,
    required: true
  },
  //date completed based on the update request time. The idea is to use this to hide the completed items from display after a certain period
  dateCompleted: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
    required: false
  },
  deadLine: {
    type: Date,
    required: false
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
