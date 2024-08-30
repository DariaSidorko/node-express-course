

const express = require('express');
const router = express.Router();
//const Task = require('../models/task');

const { 
  addTask, 
  getTasks, 
  getTaskById, 
  updateTask, 
  editTask, 
  deleteTask 
} = require('../controllers/tasks');

router.route('/').post(addTask).get(getTasks);
router.route('/:id').get(getTaskById).patch(editTask).put(updateTask).delete(deleteTask);

module.exports = router;

// // Create a task
// router.post('/', addTask);

// // Read all tasks
// router.get('/', getTasks);

// // Read task by id
// router.get('/:id', getTaskById);

// // Update task by id
// router.patch('/:id', updateTask);

// // Delete task by id
// router.delete('/:id', deleteTask);




