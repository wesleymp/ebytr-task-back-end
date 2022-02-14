const { newTasksModel } = require('./tasks/newTaskModel');
const { allTasksModel } = require('./tasks/allTasksModel');
const { updateTaskModel } = require('./tasks/updateTaskModel');
const { removeTaskModel } = require('./tasks/removeTaskModel');

module.exports = {
  newTasksModel,
  allTasksModel,
  updateTaskModel,
  removeTaskModel,
};
