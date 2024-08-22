
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength:[20, "name can not be more than 20 characers"]
  },
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;


