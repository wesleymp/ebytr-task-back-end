const sinon = require('sinon');

const { allTasksController } = require('../../src/controllers');
const { getConnection } = require('../../src/models/connection');

describe('Testando o controller allTasksController', () => {
  const req = {};
  const res = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterAll(() => {
    getConnection().then((conn) => {
      conn.collection('tasks').deleteMany({});
    });
  });

  it('deve retornar um status 404 se não tiver nenhuma tarefa criada', async () => {
    await allTasksController(req, res);
    expect(res.status.calledWith(404)).toBe(true);
  });

  it('deve retornar uma mensagem "Nenhuma tarefa encontrada." se não tiver nenhuma tarefa criada', async () => {
    await allTasksController(req, res);
    expect(res.json.calledWith({ message: 'Nenhuma tarefa encontrada.' })).toBe(
      true,
    );
  });

  it('deve retornar um status 200 se encontrar 1 ou mais tarefas', async () => {
    const conn = await getConnection();
    await conn.collection('tasks').insertOne({
      title: 'valid_title',
      status: 'pendente',
      created_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
      updated_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
    });
    await allTasksController(req, res);
    expect(res.status.calledWith(200)).toBe(true);
  });
});
