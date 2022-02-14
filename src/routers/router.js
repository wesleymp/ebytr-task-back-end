const { Router } = require('express');
const {
  newTaskController,
  allTasksController,
  updateTaskController,
  removeTaskController,
} = require('../controllers');
const taskMiddleware = require('../middlewares/taskMiddleware');

const router = Router();

router.post('/new-task', taskMiddleware.validateTitle, newTaskController);
router.get('/tasks', allTasksController);
router.put(
  '/update-task',
  taskMiddleware.validateId,
  taskMiddleware.validateStatus,
  updateTaskController,
);
router.delete('/remove-task', taskMiddleware.validateId, removeTaskController);

module.exports = router;
