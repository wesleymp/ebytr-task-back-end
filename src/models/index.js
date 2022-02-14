const { newTasksModel } = require('./tasks/newTaskModel');
const { allTasksModel } = require('./tasks/allTasksModel');
const { updateTaskModel } = require('./tasks/updateTaskModel');

module.exports = {
  newTasksModel,
  allTasksModel,
  updateTaskModel,
};
