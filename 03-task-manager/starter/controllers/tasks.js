
const Task = require('../models/Task')

const getAllTasks =  (req, res) => {
  res.send('all items')
}

const createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(201).json({ task });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

const getTask =  (req, res) => {
    res.send('get ones')
}

const deleteTask =  (req, res) => {
    res.send('delete')
}

const updateTask =  (req, res) => {
    res.send('update')
}

  
 module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
  }
  

