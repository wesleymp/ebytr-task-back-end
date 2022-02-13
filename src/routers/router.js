const { Router } = require('express');
const { newTaskController } = require('../controllers');
const taskMiddleware = require('../middlewares/taskMiddleware');

const router = Router();

router.post('/new-task', taskMiddleware.validateTitle, newTaskController);

module.exports = router;
