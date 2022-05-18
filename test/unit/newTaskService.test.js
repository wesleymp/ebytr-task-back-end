const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');

describe('Testando o service newTaskService', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 201 se o registro for efetuado com sucesso', async () => {
    sinon.stub(models, 'newTasksModel').resolves();
    const taskData = await services.newTaskService('valid_title');
    expect(taskData.status).toBe(201);
  });

  it('deve retornar uma mensagem "Tarefa criada com sucesso!" se o registro for efetuado com sucesso', async () => {
    sinon.stub(models, 'newTasksModel').resolves();
    const taskData = await services.newTaskService('valid_title');
    expect(taskData.message).toBe('Tarefa criada com sucesso!');
  });
});
