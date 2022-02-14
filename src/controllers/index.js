const { newTaskController } = require('./tasks/newTaskController');
const { allTasksController } = require('./tasks/allTasksController');
const { updateTaskController } = require('./tasks/updateTaskController');

module.exports = {
  newTaskController,
  allTasksController,
  updateTaskController,
};
