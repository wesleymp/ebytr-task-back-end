const request = require('supertest');
const sinon = require('sinon');
const app = require('../../src/main/app');
const models = require('../../src/models');
const data = require('../memory-data/allTasks');

describe('Rota para listar todas as tarefas (/tasks)', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 404 se não tiver nenhuma tarefa criada', (done) => {
    sinon.stub(models, 'allTasksModel').resolves([]);
    request(app)
      .get('/tasks')
      .expect(404)
      .end(done);
  });

  it('deve retornar um status 200 encontrar 1 ou mais tarefas', (done) => {
    sinon.stub(models, 'allTasksModel').resolves(data);
    request(app)
      .get('/tasks')
      .expect(200)
      .end(done);
  });
});
