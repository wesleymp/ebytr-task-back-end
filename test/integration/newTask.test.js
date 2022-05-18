const request = require('supertest');
const sinon = require('sinon');
const app = require('../../src/main/app');
const models = require('../../src/models');

describe('Teste para criar uma nova tarefa', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 400 se o usuário não informar um titulo para uma nova tarefa', (done) => {
    request(app)
      .post('/new-task')
      .send({
        title: '',
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 400 se o usuário informar um titulo menor que 6 caractres para uma nova tarefa', (done) => {
    request(app)
      .post('/new-task')
      .send({
        title: '12345',
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 201 se o a nova tarefa for criada com sucesso', (done) => {
    sinon.stub(models, 'newTasksModel').resolves();
    request(app)
      .post('/new-task')
      .send({
        title: 'valid_title_task',
      })
      .expect(201)
      .end(done);
  });
});
