const sinon = require('sinon');

const { validateTitle } = require('../../src/middlewares/taskMiddleware');

describe('Testando o middleware validateTitle', () => {
  const req = {};
  const res = {};
  const next = {};

  beforeEach(() => {
    req.body = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  it('deve retornar um status 400 se o usuário não informar um titulo para uma nova tarefa', () => {
    req.body.title = '';
    validateTitle(req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });

  it('deve retornar uma mensagem "O campo titulo é obrigatório." se o usuário não informar um titulo para uma nova tarefa', () => {
    req.body.title = '';
    validateTitle(req, res, next);
    expect(
      res.json.calledWith({ message: 'O campo titulo é obrigatório.' }),
    ).toBe(true);
  });

  it('deve retornar um status 400 se o usuário informar um titulo menor que 6 caractres para uma nova tarefa', () => {
    req.body.title = '12345';
    validateTitle(req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });

  it('deve retornar uma mensagem "O titulo deve conter pelo menos 6 caracteres." se o usuário informar um titulo menor que 6 caractres para uma nova tarefa', () => {
    req.body.title = '12345';
    validateTitle(req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });
});
