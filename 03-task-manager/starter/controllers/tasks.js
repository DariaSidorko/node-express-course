
const Task = require('../models/task');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

// POST /tasks
const addTask =  asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

// GET /tasks
const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
});

// GET /tasks/:id
const getTaskById = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

// PUT /tasks/:id
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

//PATCH /tasks/:id
const editTask = asyncWrapper(async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { 
      new: true, 
      runValidators: true,
      overwrite:true 
    });
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(400).json({ task })
});

// DELETE /tasks/:id
const deleteTask =  asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})



module.exports = { addTask, getTasks, getTaskById, updateTask, editTask, deleteTask};




// PATCH /tasks/:id
// const editTask = async (req, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(req.params.id, req.body, { 
//       new: true, 
//       runValidators: true,
//       overwrite:true 
//     });
//     if (!task) {
//       return res.status(404).json({msg:`No task with id: ${req.params.id}`});
//     }
//     res.status(200).json({task})
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// POST /tasks
// const addTask =  async (req, res) => {
//   try {
//     const task = new Task(req.body);
//     await task.save();
//     res.status(201).send(task);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };