const models = require('../../models');
const { error } = require('../helpers/error');

const removeTaskService = async (id) => {
  const taskData = await models.removeTaskModel(id);
  if (taskData.deletedCount === 0) {
    error(404, 'ID não encontrado.');
  }
  return { status: 200, message: 'Tarefa removida!' };
};

module.exports = {
  removeTaskService,
};
