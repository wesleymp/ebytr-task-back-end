const { newTaskController } = require('./tasks/newTaskController');
const { allTasksController } = require('./tasks/allTasksController');
const { updateTaskController } = require('./tasks/updateTaskController');
const { removeTaskController } = require('./tasks/removeTaskController');

module.exports = {
  newTaskController,
  allTasksController,
  updateTaskController,
  removeTaskController,
};
