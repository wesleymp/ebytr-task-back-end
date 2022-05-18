const sinon = require('sinon');
const { allTasksController } = require('../../src/controllers');
const services = require('../../src/services');
const data = require('../memory-data/allTasks');

describe('Testando o controller allTasksController', () => {
  const req = {};
  const res = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('deve retornar um status 404 se não tiver nenhuma tarefa criada', async () => {
    sinon.stub(services, 'allTasksService').rejects({ status: 404, message: 'Nenhuma tarefa encontrada.' });
    await allTasksController(req, res);
    expect(res.status.calledWith(404)).toBe(true);
  });

  it('deve retornar uma mensagem "Nenhuma tarefa encontrada." se não tiver nenhuma tarefa criada', async () => {
    sinon.stub(services, 'allTasksService').rejects({ status: 404, message: 'Nenhuma tarefa encontrada.' });
    await allTasksController(req, res);
    expect(res.json.calledWith({ message: 'Nenhuma tarefa encontrada.' })).toBe(
      true,
    );
  });

  it('deve retornar um status 200 se encontrar 1 ou mais tarefas', async () => {
    sinon.stub(services, 'allTasksService').resolves({ status: 200, message: 'OK', data });
    await allTasksController(req, res);
    expect(res.status.calledWith(200)).toBe(true);
  });
});
