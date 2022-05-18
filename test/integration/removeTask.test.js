const request = require('supertest');
const sinon = require('sinon');
const app = require('../../src/main/app');
const models = require('../../src/models');

describe('Rota para remover uma tarefa (/remove-task)', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 400 se o usuário não informar um id para remover a tarefa', (done) => {
    request(app)
      .delete('/remove-task')
      .send({
        id: '',
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 400 se o usuário informar um id inválido para remover a tarefa', (done) => {
    request(app)
      .delete('/remove-task')
      .send({
        id: 'invalid_id',
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 404 se o usuário informar um id válido mas que não exista no banco de dados para remover a tarefa', (done) => {
    sinon.stub(models, 'removeTaskModel').resolves({ deletedCount: 0 });
    request(app)
      .delete('/remove-task')
      .send({
        id: '6206e3e054aca1010661c095',
      })
      .expect(404)
      .end(done);
  });

  it('deve retornar um status 200 se a tarefa for removida com sucesso', (done) => {
    sinon.stub(models, 'removeTaskModel').resolves({ deletedCount: 1 });
    request(app)
      .delete('/remove-task')
      .send({
        id: '6206e3e054aca1010661c095',
      })
      .expect(200)
      .end(done);
  });
});
