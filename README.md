# Ebytr Back-End

## Lista de tarefas

# indice

- [Informações da aplicação](#Aplicação)
- [Tecnologias](#Tecnologias)
- [Instalação](#Instalação)
- [Schema do MongoDB](#MongoDB)
- [Realizando os testes](#Testes)

# Aplicação

_Funcionalidades:_

- Visualizar a lista de tarefas;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;

---

# Tecnologias

- Node.js - https://nodejs.org/en/
- Express - https://expressjs.com/pt-br/
- MongoDB - https://github.com/mongodb/node-mongodb-native
- Dotenv - https://github.com/motdotla/dotenv
- Jest - https://jestjs.io/pt-BR/
- Sinon - https://sinonjs.org/
- Supertest - https://github.com/visionmedia/supertest
- Eslint - https://eslint.org/
- Nodemon - https://github.com/remy/nodemon

---

# Instalação

## Normal

- `git clone https://github.com/wesleymp/ebytr-task-back-end.git`

  Entra na pasta do projeto `cd ebytr-task-back-end`

  Utilize o comando `npm install`

  Modifique o .env.example para .env na raiz do projeto e adicione as váriaveis de ambiente

  - _Exemplo de como deve ficar_

  ```
  PORT=3333

  MONGO_URL=mongodb://127.0.0.1:27017

  DB_TASK=tasks
  ```

  Para iniciar a aplicação `npm run dev`

## Docker

- `git clone https://github.com/wesleymp/ebytr-task-back-end.git`

  Entra na pasta do projeto `cd ebytr-task-back-end`

  Modifique o .env.example para .env na raiz do projeto e adicione as váriaveis de ambiente

  - _Exemplo de como deve ficar_

  ```
  PORT=3333

  MONGO_URL=mongodb://docker:docker@ebytr-task-back-end_mongo_1:27017

  DB_TASK=tasks
  ```

  Utilize o comando `docker-compose up --build`

---

_Rotas:_

`[get] /tasks`

`[post] /new-task`

- _Request: body_

```json
{
  "title": "Example Title"
}
```

`[put] /update-task`

_Status das tarefas:_

```
1: 'em andamento'
2: 'pendente'
3: 'pronta'
```

- _Request: body_

```json
{
  "id": "620aaddc2b717d481df64b12",
  "status": 1
}
```

`[delete] /remove-task`

- _Request: body_

```json
{
  "id": "620aaddc2b717d481df64b12"
}
```

---

## Arvore de diretórios

<img src="https://github.com/wesleymp/ebytr-task-back-end/blob/main/image_dir/Captura%20de%20tela%20de%202022-02-14%2019-09-01.png?raw=true" />

---

| Diretórios    | Descrição                                                                             |
| ------------- | ------------------------------------------------------------------------------------- |
| `test`        | Diretório que contém todos os testes da aplicação (integration /unit)                 |
| `src`         | Diretório onde estão todas as funcionalidades da aplicação                            |
| `Controllers` | Diretório responsável por gerênciar as Requisições e Respostas                        |
| `main`        | Diretório responsável por iniciar o servidor express                                  |
| `middlewares` | Diretório que gerência Requisições e Respostas, mas contém algumas regras de negócios |
| `models`      | Diretório responsável pela comunicação com o banco de dados                           |
| `routers`     | Diretório que contém todas as rotas da aplicação                                      |
| `services`    | Diretório responsável pelas regras de negócio                                         |

---

# MongoDB

- Database `tasks`
- Collection `tasks`

- Estrutura

```json
{
  "_id": "6206e3cf54aca1010661c093",
  "title": "Exemplo de titulo",
  "status": 2,
  "created_at": "11/02/2022 19:31:43",
  "updated_at": "11/02/2022 19:31:43"
}
```

# Testes

Caso esteja rodando a aplicação no Docker entre primeiro no container `docker exec -it ebytr-task-back-end_ebytr_1 bash` e rode um dos comando a baixo:

- `npm test` para rodar todos os testes
- `npm run test:unit` para rodar os testes unitários
- `npm run test:integration` para rodar os teste de integração
- `npm run test:coverage` para rodar os testes com o coverage

---

## Referência

- [Formato para as Datas](https://stackoverflow.com/a/48206857)
- [Timezones](https://stackoverflow.com/a/54500197)
