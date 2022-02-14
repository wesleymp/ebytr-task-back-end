const request = require('supertest');

const app = require('../../src/main/app');
const { getConnection } = require('../../src/models/connection');

describe('Rota para listar todas as tarefas (/tasks)', () => {
  beforeEach(async () => {
    const conn = await getConnection();
    await conn.collection('tasks').insertOne({
      title: 'valid_title_task',
      status: 2,
      created_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
      updated_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
    });
  });

  it('deve retornar um status 404 se não tiver nenhuma tarefa criada', (done) => {
    getConnection().then((conn) => {
      conn.collection('tasks').deleteMany({});
    });
    request(app).get('/tasks').expect(404).end(done);
  });

  it('deve retornar um status 200 encontrar 1 ou mais tarefas', (done) => {
    request(app).get('/tasks').expect(200).end(done);
  });
});
