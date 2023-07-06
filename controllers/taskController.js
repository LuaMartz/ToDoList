const Task = require('../models/taskModel');

const taskController = {
    createTask: async (req, res) => {
        try {
          const { title, description, date, status } = req.body;
          const task = await Task.create({ title, description, date, status });
          res.json({ msg: 'Task created', task });
        } catch (error) {
          res.status(500).json({ msg: error.message });
        }
      },

  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find({});
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  getTaskById: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  updateTask: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const task = await Task.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
      }
      res.json({ msg: 'Task updated', task });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },

  deleteTask: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        return res.status(404).json({ msg: 'Task not found' });
      }
      res.json({ msg: 'Task deleted', task });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};

module.exports = taskController;
