const { getConnection } = require('../../src/models/connection');
const {
  updateTaskService,
} = require('../../src/services/tasks/updateTaskService');

describe('Testando o service updateTaskService', () => {
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

  it('deve retornar um status 404 se o id informado não existir no banco de dados para atualizar a tarefa', async () => {
    try {
      await updateTaskService('012345678998765432102424', 3);
    } catch (error) {
      expect(error.status).toBe(404);
    }
  });

  it('deve retornar uma mensagem "ID não encontrado." se o id informado não existir no banco de dados para atualizar a tarefa', async () => {
    try {
      await updateTaskService('012345678998765432102424', 3);
    } catch (error) {
      expect(error.message).toBe('ID não encontrado.');
    }
  });

  it('deve retornar um status 200 se a tarefa for atualizada com sucesso', async () => {
    const taskData = await updateTaskService(getId, 3);
    expect(taskData.status).toBe(200);
  });

  it('deve retornar uma mensagem "Tarefa atualizada!" se a tarefa for atualizada com sucesso', async () => {
    const taskData = await updateTaskService(getId, 3);
    expect(taskData.message).toBe('Tarefa atualizada!');
  });
});
