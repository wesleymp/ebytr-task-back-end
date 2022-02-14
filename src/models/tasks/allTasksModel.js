const { getConnection } = require('../connection');

const allTasksModel = async () => {
  const conn = await getConnection();
  const query = await conn
    .collection('tasks')
    .find({})
    .sort({ status: 1, created_at: -1 })
    .toArray();
  return query;
};

module.exports = {
  allTasksModel,
};
