const { newTaskService } = require('./tasks/newTaskService');
const { allTasksService } = require('./tasks/allTasksService');
const { updateTaskService } = require('./tasks/updateTaskService');
const { removeTaskService } = require('./tasks/removeTaskService');

module.exports = {
  newTaskService,
  allTasksService,
  updateTaskService,
  removeTaskService,
};
