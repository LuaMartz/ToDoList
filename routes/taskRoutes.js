const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.post('/create', taskController.createTask);
router.patch('/update/:id', taskController.updateTask);
router.delete('/delete/:id', taskController.deleteTask);

module.exports = router;