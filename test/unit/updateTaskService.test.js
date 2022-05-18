const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');

describe('Testando o service updateTaskService', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 404 se o id informado não existir no banco de dados para atualizar a tarefa', async () => {
    sinon.stub(models, 'updateTaskModel').resolves({ modifiedCount: 0 });
    try {
      await services.updateTaskService('012345678998765432102424', 3);
    } catch (error) {
      expect(error.status).toBe(404);
    }
  });

  it('deve retornar uma mensagem "ID não encontrado." se o id informado não existir no banco de dados para atualizar a tarefa', async () => {
    sinon.stub(models, 'updateTaskModel').resolves({ modifiedCount: 0 });
    try {
      await services.updateTaskService('012345678998765432102424', 3);
    } catch (error) {
      expect(error.message).toBe('ID não encontrado.');
    }
  });

  it('deve retornar um status 200 se a tarefa for atualizada com sucesso', async () => {
    sinon.stub(models, 'updateTaskModel').resolves({ modifiedCount: 1 });
    const taskData = await services.updateTaskService('012345678998765432102424', 3);
    expect(taskData.status).toBe(200);
  });

  it('deve retornar uma mensagem "Tarefa atualizada!" se a tarefa for atualizada com sucesso', async () => {
    sinon.stub(models, 'updateTaskModel').resolves({ modifiedCount: 1 });
    const taskData = await services.updateTaskService('012345678998765432102424', 3);
    expect(taskData.message).toBe('Tarefa atualizada!');
  });
});
