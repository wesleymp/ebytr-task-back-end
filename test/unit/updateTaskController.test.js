const sinon = require('sinon');
const { updateTaskController } = require('../../src/controllers');
const services = require('../../src/services');

describe('Testando o controller updateTaskController', () => {
  const req = {
    body: {},
  };
  const res = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  beforeAll(() => {
    req.body.id = '012345678998765432102424';
    req.body.status = 3;
  });

  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 404 se o id informado não existir no banco de dados para atualizar a tarefa', async () => {
    sinon.stub(services, 'updateTaskService').rejects({ status: 404, message: 'ID não encontrado.' });
    await updateTaskController(req, res);
    expect(res.status.calledWith(404)).toBe(true);
  });

  it('deve retornar uma mensagem "ID não encontrado." se o id informado não existir no banco de dados para atualizar a tarefa', async () => {
    sinon.stub(services, 'updateTaskService').rejects({ status: 404, message: 'ID não encontrado.' });
    await updateTaskController(req, res);
    expect(res.json.calledWith({ message: 'ID não encontrado.' })).toBe(true);
  });

  it('deve retornar um status 200 se a tarefa for atualizada com sucesso', async () => {
    sinon.stub(services, 'updateTaskService').resolves({ status: 200, message: 'Tarefa atualizada!' });
    await updateTaskController(req, res);
    expect(res.status.calledWith(200)).toBe(true);
  });

  it('deve retornar uma mensagem "Tarefa atualizada!" se a tarefa for atualizada com sucesso', async () => {
    sinon.stub(services, 'updateTaskService').resolves({ status: 200, message: 'Tarefa atualizada!' });
    await updateTaskController(req, res);
    expect(res.json.calledWith({ message: 'Tarefa atualizada!' })).toBe(true);
  });
});
