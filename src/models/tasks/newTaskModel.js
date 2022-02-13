const { getConnection } = require('../connection');

const newTasksModel = async (payload) => {
  const conn = await getConnection();
  await conn.collection('tasks').insertOne({
    title: payload.title,
    status: payload.status,
    created_at: payload.created_at,
    updated_at: payload.updated_at,
  });
};

module.exports = {
  newTasksModel,
};
