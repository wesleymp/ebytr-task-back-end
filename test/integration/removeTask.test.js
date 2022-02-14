const request = require('supertest');
const app = require('../../src/main/app');
const { getConnection } = require('../../src/models/connection');

describe('Rota para remover uma tarefa (/remove-task)', () => {
  let getId;

  beforeEach(async () => {
    const conn = await getConnection();
    const query = await conn.collection('tasks').insertOne({
      title: 'valid_title_task',
      status: 'pendente',
      created_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
      updated_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
    });

    getId = query.insertedId.toString();
  });

  afterEach(() => {
    getConnection().then((conn) => {
      conn.collection('tasks').deleteMany({});
    });
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
    request(app)
      .delete('/remove-task')
      .send({
        id: '6206e3e054aca1010661c095',
      })
      .expect(404)
      .end(done);
  });

  it('deve retornar um status 200 se a tarefa for removida com sucesso', (done) => {
    request(app)
      .delete('/remove-task')
      .send({
        id: getId,
      })
      .expect(200)
      .end(done);
  });
});
