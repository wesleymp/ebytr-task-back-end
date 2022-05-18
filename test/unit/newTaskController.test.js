const sinon = require('sinon');
const { newTaskController } = require('../../src/controllers');
const services = require('../../src/services');

describe('Testando o controller newTaskController', () => {
  const req = {};
  const res = {};

  beforeEach(() => {
    req.body = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 201 se o registro for efetuado com sucesso', async () => {
    sinon.stub(services, 'newTaskService').resolves({ status: 201, message: 'Tarefa criada com sucesso!' });
    req.body.title = 'valid_title';
    await newTaskController(req, res);
    expect(res.status.calledWith(201)).toBe(true);
  });

  it('deve retornar uma mensagem "Tarefa criada com sucesso!" se o registro for efetuado com sucesso', async () => {
    sinon.stub(services, 'newTaskService').resolves({ status: 201, message: 'Tarefa criada com sucesso!' });
    req.body.title = 'valid_title';
    await newTaskController(req, res);
    expect(res.json.calledWith({ message: 'Tarefa criada com sucesso!' })).toBe(
      true,
    );
  });
});
