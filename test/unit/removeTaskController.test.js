const sinon = require('sinon');

const { removeTaskController } = require('../../src/controllers');
const { getConnection } = require('../../src/models/connection');

describe('Testando o controller removeTaskController', () => {
  let getId;
  const req = {};
  const res = {};

  beforeEach(() => {
    req.body = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

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

  afterAll(() => {
    getConnection().then((conn) => {
      conn.collection('tasks').deleteMany({});
    });
  });

  it('deve retornar um status 404 se o id informado não existir no banco de dados para remover a tarefa', async () => {
    req.body.id = '012345678998765432102424';
    await removeTaskController(req, res);
    expect(res.status.calledWith(404)).toBe(true);
  });

  it('deve retornar uma mensagem "ID não encontrado." se o id informado não existir no banco de dados para remover a tarefa', async () => {
    req.body.id = '012345678998765432102424';
    await removeTaskController(req, res);
    expect(res.json.calledWith({ message: 'ID não encontrado.' })).toBe(true);
  });

  it('deve retornar um status 200 se a tarefa for removida com sucesso', async () => {
    req.body.id = getId;
    await removeTaskController(req, res);
    expect(res.status.calledWith(200)).toBe(true);
  });

  it('deve retornar uma mensagem "Tarefa removida!" se a tarefa for removida com sucesso', async () => {
    req.body.id = getId;
    await removeTaskController(req, res);
    expect(res.json.calledWith({ message: 'Tarefa removida!' })).toBe(true);
  });
});
