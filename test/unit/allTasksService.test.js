const { allTasksService } = require('../../src/services');
const { getConnection } = require('../../src/models/connection');

describe('Testando o Service allTasksService', () => {
  afterAll(() => {
    getConnection().then((conn) => {
      conn.collection('tasks').deleteMany({});
    });
  });

  it('deve retornar um status 404 se não tiver nenhuma tarefa criada', async () => {
    try {
      await allTasksService();
    } catch (error) {
      expect(error.status).toBe(404);
    }
  });

  it('deve retornar uma mensagem "Nenhuma tarefa encontrada." se não tiver nenhuma tarefa criada', async () => {
    try {
      await allTasksService();
    } catch (error) {
      expect(error.message).toBe('Nenhuma tarefa encontrada.');
    }
  });

  it('deve retornar um status 200 encontrar 1 ou mais tarefas', async () => {
    const conn = await getConnection();
    await conn.collection('tasks').insertOne({
      title: 'valid_title',
      status: 'pendente',
      created_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
      updated_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
    });

    const taskData = await allTasksService();
    expect(taskData.status).toBe(200);
  });

  it('deve retornar uma mensagem "OK" se encontrar 1 ou mais tarefas', async () => {
    const conn = await getConnection();
    await conn.collection('tasks').insertOne({
      title: 'valid_title',
      status: 'pendente',
      created_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
      updated_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
    });

    const taskData = await allTasksService();
    expect(taskData.message).toBe('OK');
  });

  it('deve retornar um objeto com _id, title, status, created_at e updated_at se exister 1 ou mais tarefas', async () => {
    const conn = await getConnection();
    await conn.collection('tasks').insertOne({
      title: 'valid_title',
      status: 'pendente',
      created_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
      updated_at: new Date().toLocaleString('pt-br', {
        timeZone: 'America/Sao_Paulo',
      }),
    });
    const taskData = await allTasksService();
    taskData.data.forEach((data) => {
      expect(data).toHaveProperty('_id');
      expect(data).toHaveProperty('title');
      expect(data).toHaveProperty('status');
      expect(data).toHaveProperty('created_at');
      expect(data).toHaveProperty('updated_at');
    });
  });
});
