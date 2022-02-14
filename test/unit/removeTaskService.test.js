const { getConnection } = require('../../src/models/connection');
const {
  removeTaskService,
} = require('../../src/services/tasks/removeTaskService');

describe('Testando o service removeTaskService', () => {
  let getId;

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
    try {
      await removeTaskService('012345678998765432102424');
    } catch (error) {
      expect(error.status).toBe(404);
    }
  });

  it('deve retornar uma mensagem "ID não encontrado." se o id informado não existir no banco de dados para remover a tarefa', async () => {
    try {
      await removeTaskService('012345678998765432102424');
    } catch (error) {
      expect(error.message).toBe('ID não encontrado.');
    }
  });

  it('deve retornar um status 200 se a tarefa for removida com sucesso', async () => {
    const taskData = await removeTaskService(getId);
    expect(taskData.status).toBe(200);
  });

  it('deve retornar uma mensagem "Tarefa removida!" se a tarefa for removida com sucesso', async () => {
    const taskData = await removeTaskService(getId);
    expect(taskData.message).toBe('Tarefa removida!');
  });
});
