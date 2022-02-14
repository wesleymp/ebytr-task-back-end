const sinon = require('sinon');

const { validateId } = require('../../src/middlewares/taskMiddleware');

describe('Testando o middleware validateId', () => {
  const req = {};
  const res = {};
  const next = {};

  beforeEach(() => {
    req.body = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  });

  it('deve retornar um status 400 se o usuário não informar um id para atualizar uma tarefa', () => {
    req.body.id = '';
    validateId(req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });

  it('deve retornar uma mensagem "O campo id é obrigatório." se o usuário não informar um id para atualizar uma tarefa', () => {
    req.body.id = '';
    validateId(req, res, next);
    expect(res.json.calledWith({ message: 'O campo id é obrigatório.' })).toBe(
      true,
    );
  });

  it('deve retornar um status 400 se o usuário informar um id diferente de 24 caracteres para atualizar uma tarefa', () => {
    req.body.id = 'invalid_id';
    validateId(req, res, next);
    expect(res.status.calledWith(400)).toBe(true);
  });

  it('deve retornar uma mensagem "O id deve conter 24 caracteres." se o usuário informar um id diferente de 24 caracteres para atualizar uma tarefa', () => {
    req.body.id = 'invalid_id';
    validateId(req, res, next);
    expect(
      res.json.calledWith({ message: 'O id deve conter 24 caracteres.' }),
    ).toBe(true);
  });
});
