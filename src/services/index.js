const { newTaskService } = require('./tasks/newTaskService');
const { allTasksService } = require('./tasks/allTasksService');
const { updateTaskService } = require('./tasks/updateTaskService');

module.exports = {
  newTaskService,
  allTasksService,
  updateTaskService,
};
