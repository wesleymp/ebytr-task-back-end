const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');

describe('Testando o service removeTaskService', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 404 se o id informado não existir no banco de dados para remover a tarefa', async () => {
    sinon.stub(models, 'removeTaskModel').resolves({ deletedCount: 0 });
    try {
      await services.removeTaskService('012345678998765432102424');
    } catch (error) {
      expect(error.status).toBe(404);
    }
  });

  it('deve retornar uma mensagem "ID não encontrado." se o id informado não existir no banco de dados para remover a tarefa', async () => {
    sinon.stub(models, 'removeTaskModel').resolves({ deletedCount: 0 });
    try {
      await services.removeTaskService('012345678998765432102424');
    } catch (error) {
      expect(error.message).toBe('ID não encontrado.');
    }
  });

  it('deve retornar um status 200 se a tarefa for removida com sucesso', async () => {
    sinon.stub(models, 'removeTaskModel').resolves({ deletedCount: 1 });
    const taskData = await services.removeTaskService('012345678998765432102424');
    expect(taskData.status).toBe(200);
  });

  it('deve retornar uma mensagem "Tarefa removida!" se a tarefa for removida com sucesso', async () => {
    sinon.stub(models, 'removeTaskModel').resolves({ deletedCount: 1 });
    const taskData = await services.removeTaskService('012345678998765432102424');
    expect(taskData.message).toBe('Tarefa removida!');
  });
});
