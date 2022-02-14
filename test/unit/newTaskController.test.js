const sinon = require('sinon');

const { newTaskController } = require('../../src/controllers');
const { getConnection } = require('../../src/models/connection');

describe('Testando o controller newTaskController', () => {
  const req = {};
  const res = {};

  beforeEach(() => {
    req.body = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterAll(() => {
    getConnection().then((conn) => {
      conn.collection('tasks').deleteMany({});
    });
  });

  it('deve retornar um status 201 se o registro for efetuado com sucesso', async () => {
    req.body.title = 'valid_title';
    await newTaskController(req, res);
    expect(res.status.calledWith(201)).toBe(true);
  });

  it('deve retornar uma mensagem "Tarefa criada com sucesso!" se o registro for efetuado com sucesso', async () => {
    req.body.title = 'valid_title';
    await newTaskController(req, res);
    expect(res.json.calledWith({ message: 'Tarefa criada com sucesso!' })).toBe(
      true,
    );
  });
});
