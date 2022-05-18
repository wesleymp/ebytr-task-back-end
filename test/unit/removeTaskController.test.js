const sinon = require('sinon');
const { removeTaskController } = require('../../src/controllers');
const services = require('../../src/services');

describe('Testando o controller removeTaskController', () => {
  let getId;
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

  it('deve retornar um status 404 se o id informado não existir no banco de dados para remover a tarefa', async () => {
    sinon.stub(services, 'removeTaskService').rejects({ status: 404, message: 'ID não encontrado.' });
    req.body.id = '012345678998765432102424';
    await removeTaskController(req, res);
    expect(res.status.calledWith(404)).toBe(true);
  });

  it('deve retornar uma mensagem "ID não encontrado." se o id informado não existir no banco de dados para remover a tarefa', async () => {
    sinon.stub(services, 'removeTaskService').rejects({ status: 404, message: 'ID não encontrado.' });
    req.body.id = '012345678998765432102424';
    await removeTaskController(req, res);
    expect(res.json.calledWith({ message: 'ID não encontrado.' })).toBe(true);
  });

  it('deve retornar um status 200 se a tarefa for removida com sucesso', async () => {
    sinon.stub(services, 'removeTaskService').resolves({ status: 200, message: 'Tarefa removida!' });
    req.body.id = getId;
    await removeTaskController(req, res);
    expect(res.status.calledWith(200)).toBe(true);
  });

  it('deve retornar uma mensagem "Tarefa removida!" se a tarefa for removida com sucesso', async () => {
    sinon.stub(services, 'removeTaskService').resolves({ status: 200, message: 'Tarefa removida!' });
    req.body.id = getId;
    await removeTaskController(req, res);
    expect(res.json.calledWith({ message: 'Tarefa removida!' })).toBe(true);
  });
});
