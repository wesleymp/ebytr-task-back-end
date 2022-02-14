const request = require('supertest');
const app = require('../../src/main/app');
const { getConnection } = require('../../src/models/connection');

describe('Rota para atualizar uma tarefa (/update-task)', () => {
  let getId;

  beforeEach(async () => {
    const conn = await getConnection();
    const query = await conn.collection('tasks').insertOne({
      title: 'valid_title_task',
      status: 2,
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

  it('deve retornar um status 400 se o usuário não informar o status para atualizar a tarefa', (done) => {
    request(app)
      .put('/update-task')
      .send({
        id: getId,
        status: '',
      })
      .expect(400)
      .end(done);
  });

  it('deve retornar um status 400 se o usuário informar um status maior que 1 caracter para atualizar a tarefa', (done) => {
    request(app)
      .put('/update-task')
      .send({
        id: getId,
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
    request(app)
      .put('/update-task')
      .send({
        id: getId,
        status: 3,
      })
      .expect(200)
      .end(done);
  });
});
