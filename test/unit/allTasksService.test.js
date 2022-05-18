const sinon = require('sinon');
const services = require('../../src/services');
const models = require('../../src/models');
const data = require('../memory-data/allTasks');

describe('Testando o Service allTasksService', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 404 se não tiver nenhuma tarefa criada', async () => {
    sinon.stub(models, 'allTasksModel').resolves([]);
    try {
      await services.allTasksService();
    } catch (error) {
      expect(error.status).toBe(404);
    }
  });

  it('deve retornar uma mensagem "Nenhuma tarefa encontrada." se não tiver nenhuma tarefa criada', async () => {
    sinon.stub(models, 'allTasksModel').resolves([]);
    try {
      await services.allTasksService();
    } catch (error) {
      expect(error.message).toBe('Nenhuma tarefa encontrada.');
    }
  });

  it('deve retornar um status 200 encontrar 1 ou mais tarefas', async () => {
    sinon.stub(models, 'allTasksModel').resolves(data);
    const taskData = await services.allTasksService();
    expect(taskData.status).toBe(200);
  });

  it('deve retornar uma mensagem "OK" se encontrar 1 ou mais tarefas', async () => {
    sinon.stub(models, 'allTasksModel').resolves(data);
    const taskData = await services.allTasksService();
    expect(taskData.message).toBe('OK');
  });

  it('deve retornar um objeto com _id, title, status, created_at e updated_at se exister 1 ou mais tarefas', async () => {
    sinon.stub(models, 'allTasksModel').resolves(data);
    const taskData = await services.allTasksService();
    taskData.data.forEach((dataTask) => {
      expect(dataTask).toHaveProperty('title');
      expect(dataTask).toHaveProperty('status');
      expect(dataTask).toHaveProperty('created_at');
      expect(dataTask).toHaveProperty('updated_at');
    });
  });
});
