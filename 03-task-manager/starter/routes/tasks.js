

const express = require('express');
const router = express.Router();
//const Task = require('../models/task');

const { addTask, getTasks, getTaskById, deleteTask } = require('../controllers/tasks');

// Create a task
router.post('/', addTask);

// Read all tasks
router.get('/', getTasks);

// Read task by id
router.get('/:id', getTaskById);

// Delete task by id
router.delete('/:id', deleteTask);

module.exports = router;


