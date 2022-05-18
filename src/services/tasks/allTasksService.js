const models = require('../../models');
const { error } = require('../helpers/error');
const { enumStatus } = require('../helpers/enumStatus');

const allTasksService = async () => {
  const dataTasks = await models.allTasksModel();
  if (dataTasks.length <= 0) {
    error(404, 'Nenhuma tarefa encontrada.');
  }
  const newDataTask = dataTasks.map((data) => {
    const newObjectDataTask = {
      ...data,
      status: enumStatus[data.status],
    };
    return newObjectDataTask;
  });
  return { status: 200, message: 'OK', data: newDataTask };
};

module.exports = {
  allTasksService,
};
