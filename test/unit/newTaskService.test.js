const { newTaskService } = require('../../src/services/tasks/newTaskService');

describe('Testando o service newTaskService', () => {
  it('deve retornar um status 201 se o registro for efetuado com sucesso', async () => {
    const taskData = await newTaskService('valid_title');
    expect(taskData.status).toBe(201);
  });

  it('deve retornar uma mensagem "Tarefa criada com sucesso!" se o registro for efetuado com sucesso', async () => {
    const taskData = await newTaskService('valid_title');
    expect(taskData.message).toBe('Tarefa criada com sucesso!');
  });
});
