const { allTasksModel } = require('../../models');
const { error } = require('../helpers/error');

const allTasksService = async () => {
  const dataTasks = await allTasksModel();
  if (dataTasks.length <= 0) {
    error(404, 'Nenhuma tarefa encontrada.');
  }
  return { status: 200, message: 'OK', data: dataTasks };
};

module.exports = {
  allTasksService,
};
