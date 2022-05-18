const request = require('supertest');
const sinon = require('sinon');
const app = require('../../src/main/app');
const models = require('../../src/models');

describe('Rota para atualizar uma tarefa (/update-task)', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 400 se o usuário não informar o status para atualizar a tarefa', (done) => {
    request(app)
      .put('/update-task')
      .send({
        id: '6206e3e054aca1010661c095',
        status: '',
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 400 se o usuário informar um status maior que 1 caracter para atualizar a tarefa', (done) => {
    request(app)
      .put('/update-task')
      .send({
        id: '6206e3e054aca1010661c095',
        status: 12,
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 400 se o usuário não informar um id para atualizar a tarefa', (done) => {
    request(app)
      .put('/update-task')
      .send({
        id: '',
        status: 3,
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 400 se o usuário informar um id inválido para atualizar a tarefa', (done) => {
    request(app)
      .put('/update-task')
      .send({
        id: 'invalid_id',
        status: 3,
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 404 se o usuário informar um id válido mas que não exista no banco de dados para atualizar a tarefa', (done) => {
    sinon.stub(models, 'updateTaskModel').resolves({ modifiedCount: 1 });
    request(app)
      .put('/update-task')
      .send({
        id: '6206e3e054aca1010661c095',
        status: 3,
      })
      .expect(404)
      .end(done);
  });

  it('deve retornar um status 200 se o status da tarefa for atualizado com sucesso', (done) => {
    sinon.stub(models, 'updateTaskModel').resolves({ modifiedCount: 1 });
    request(app)
      .put('/update-task')
      .send({
        id: '6206e3e054aca1010661c095',
        status: 3,
      })
      .expect(200)
      .end(done);
  });
});
