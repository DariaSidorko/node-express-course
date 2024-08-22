
const Task = require('../models/task');

// POST /tasks
const addTask =  async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
};

// GET /tasks
const getTasks = async (req, res) => {
  console.log("Here")
  try {
    const tasks = await Task.find({});
    console.log(tasks)
    res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
};

// GET /tasks/:id
const getTaskById = async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
};

// DELETE /tasks/:id
const deleteTask =  async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
};



module.exports = { addTask, getTasks, getTaskById, deleteTask};