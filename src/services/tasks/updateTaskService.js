const { updateTaskModel } = require('../../models');
const { error } = require('../helpers/error');

const updateTaskService = async (id, status) => {
  const payload = {
    id,
    status,
    updated_at: new Date().toLocaleString('pt-br', {
      timeZone: 'America/Sao_Paulo',
    }),
  };
  const taskData = await updateTaskModel(payload);
  if (taskData.modifiedCount === 0) {
    error(404, 'ID não encontrado.');
  }
  return { status: 200, message: 'Tarefa atualizada!' };
};

module.exports = {
  updateTaskService,
};
