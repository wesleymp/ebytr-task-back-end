const models = require('../../models');

const newTaskService = async (title) => {
  const payload = {
    title,
    status: 2,
    created_at: new Date().toLocaleString('pt-br', {
      timeZone: 'America/Sao_Paulo',
    }),
    updated_at: new Date().toLocaleString('pt-br', {
      timeZone: 'America/Sao_Paulo',
    }),
  };
  await models.newTasksModel(payload);
  return { status: 201, message: 'Tarefa criada com sucesso!' };
};

module.exports = {
  newTaskService,
};
