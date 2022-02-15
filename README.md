# Ebytr Back-End

## Lista de tarefas

# indice

- [Tecnologias](#Técnologias)
- [Instalação](#Instalação)
- [Informações da aplicação](#Aplicação)
- [Schema do MongoDB](#MongoDB)
- [Realizando os testes](#Testes)

# Técnologias

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

- `git clone https://github.com/wesleymp/ebytr-task-back-end.git`

  Entra na pasta do projeto `cd ebytr-task-back-end`

  Utilize o comando `npm install`

  Modifique o .env.example para .env na raiz do projeto e adicione as váriaveis de ambiente

  - _Exemplo de como deve ficar_

  ```
  PORT=3333

  MONGO_URL=mongodb://127.0.0.1:27017

  DB_TASK=tasks

  DB_TEST=test_tasks
  ```

#### OBS: _Certifique-se que o mongodb esteja instalado em seu computador_

---

# Aplicação

Para iniciar a aplicação `npm run dev`

_Funcionalidades:_

- Visualizar a lista de tarefas;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;

---

_Status das tarefas:_

```
1: 'em andamento'
2: 'pendente'
3: 'pronta'
```

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

**Se estiver utilizando o windows, modifique o `package.json` para poder utilizar os testes**

**Como deve ficar para rodas os testes no windows**

```json
"scripts": {
    "test": "set NODE_ENV=test&& jest --forceExit --runInBand --noStackTrace",
    "test:unit": "set NODE_ENV=test&& jest unit --forceExit --runInBand --noStackTrace",
    "test:integration": "set NODE_ENV=test&& jest integration --forceExit --runInBand --noStackTrace",
    "test:coverage": "set NODE_ENV=test&& jest --coverage --forceExit --runInBand --noStackTrace",
    "dev": "nodemon src/main/server.js"
  },
```

**Rodando os testes**

_Precisa estar com o mongodb instalado e iniciado para os testes funcionarem_

- `npm test` para rodar todos os testes
- `npm run test:unit` para rodar os testes unitários
- `npm run test:integration` para rodar os teste de integração
- `npm run test:coverage` para rodar os testes com o coverage

---

## Referência

- [Conexão com o MongoDB](https://app.betrybe.com/course/back-end/nodejs-camada-de-servico-e-arquitetura-rest-e-restful/arquitetura-de-software-camada-de-model/69147096-f19d-4ab4-a839-906359d79172/conteudos/e5f52e81-2757-4bf1-9b83-91fb37972892/model-com-mongodb/012da0ea-223f-404d-b21c-12be88f22a97?use_case=side_bar)
- [Formato para as Datas](https://stackoverflow.com/a/48206857)
- [Timezones](https://stackoverflow.com/a/54500197)
