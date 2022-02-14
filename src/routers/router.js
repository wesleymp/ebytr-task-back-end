const { Router } = require('express');
const { newTaskController, allTasksController } = require('../controllers');
const taskMiddleware = require('../middlewares/taskMiddleware');

const router = Router();

router.post('/new-task', taskMiddleware.validateTitle, newTaskController);
router.get('/tasks', allTasksController);

module.exports = router;
