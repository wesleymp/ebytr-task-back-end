const sinon = require('sinon');

const { validateStatus } = require('../../src/middlewares/taskMiddleware');

describe('Testando o middleware validateStatus', () => {
  const req = {};
  const res = {};
  const next = {};

  beforeEach(() => {
    req.body = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  it('deve retornar um status 400 se o usuário não informar um status para atualizar uma tarefa', () => {
    req.body.status = '';
    validateStatus(req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });

  it('deve retornar uma mensagem "O campo status é obrigatório." se o usuário não informar um status para atualizar uma tarefa', () => {
    req.body.status = '';
    validateStatus(req, res, next);
    expect(
      res.json.calledWith({ message: 'O campo status é obrigatório.' }),
    ).toBe(true);
  });

  it('deve retornar um status 400 se o usuário informar um status diferente de 1 caracter para atualizar uma tarefa', () => {
    req.body.status = 12;
    validateStatus(req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });

  it('deve retornar uma mensagem "O status deve conter 1 caracter." se o usuário informar um status diferente de 1 caracter para atualizar uma tarefa', () => {
    req.body.status = 12;
    validateStatus(req, res, next);
    expect(
      res.json.calledWith({ message: 'O status deve conter 1 caracter.' }),
    ).toBe(true);
  });
});
